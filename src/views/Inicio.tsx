"use client";
import { useContext } from "react";
import { assistantContext } from "../Context/contextsTypes";
import { UserInput } from "../components/UserInput";
import { Header } from "../Containers/Header";
import { Chat } from "../components/Chat";

export function Inicio() {
  const { assistant } = useContext(assistantContext);

  return (
    <main className="w-full h-screen flex flex-col justify-start items-center relative overflow-hidden p-2">
      <Header assistant={assistant} />
      <section className="w-full h-[calc(100vh-60px)] max-w-3xl p-2 grid grid-rows-[1fr_auto] gap-2">
        <Chat />
        <UserInput />
      </section>
    </main>
  );
}
