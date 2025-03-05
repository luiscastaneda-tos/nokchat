"use client";
import { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { assistantContext, threadContext } from "../Context/contextsTypes";

interface Message {
  role: string;
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { assistant } = useContext(assistantContext);
  const { thread, pendingMessages, saveThread } = useContext(threadContext);

  const addMessage = useCallback(
    async (content: string) => {
      const messageUser: Message = {
        role: "user",
        content,
      };

      const bodyObj = {
        thread_id: thread,
        content,
        assistantID: assistant.id,
      };

      setMessages((prevMessages) => [...prevMessages, messageUser]);
      setLoading(true);

      try {
        const res = await fetch(URL, {
          ...PARAMS,
          body: JSON.stringify(bodyObj),
        });
        const data = await res.json();

        console.log(data);

        if (data.error) throw new Error(data.error);

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: data.response.message.content[0].text.value,
          },
        ]);
        if (!thread) saveThread(data.response.thread_id);
      } catch (error) {
        console.error(error);
        alert("Ha ocurrido un error, verifica la consola");
      } finally {
        setLoading(false);
      }
    },
    [assistant.id, saveThread, thread]
  );

  useEffect(() => {
    if (pendingMessages.length) setMessages(pendingMessages);
  }, [pendingMessages]);

  return { messages, setMessages, addMessage, loading };
}

const URL = "api/";
const PARAMS = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
