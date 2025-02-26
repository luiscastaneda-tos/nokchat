import { Inicio } from "../views/Inicio";
import { AssistantContextProvider } from "../Context/assistant.jsx";
import { MessageContextProvider } from "../Context/message.jsx";
import { ThreadContextProvider } from "../Context/thread.jsx";

export default function Home() {
  return (
    <AssistantContextProvider>
      <ThreadContextProvider>
        <MessageContextProvider>
          <Inicio />
        </MessageContextProvider>
      </ThreadContextProvider>
    </AssistantContextProvider>
  );
}
