// app/api/chat/route.ts
import { connectOpenAI, assistants } from "../configs/chatgpt";
import { handleRunStatus } from "../helpers/chatgpt";

// Tipos para los parámetros de las funciones
interface MainParams {
  thread_id?: string;
  content: string;
  assistantID?: string;
}

interface ThreadMessage {
  role: string;
  content: string;
}
interface ThreadResponse {
  body: {
    data: Array<{
      role: string;
      content: Array<{
        text: {
          value: string;
        };
      }>;
    }>;
  };
}

// Función principal
async function main({
  thread_id,
  content,
  assistantID = assistants.assistant_id,
}: MainParams) {
  try {
    // Obtenemos la conexión y el asistente
    const openai = connectOpenAI();

    // Extraemos al asistente que se encuentre en nuestro id de asistente
    const assistant = await openai.beta.assistants.retrieve(assistantID);

    // Revisamos si existe un hilo actual y si no creamos uno
    let thread;
    if (!thread_id) {
      thread = await openai.beta.threads.create();
    } else {
      thread = await openai.beta.threads.retrieve(thread_id);
    }

    // Creamos el mensaje que se agrega al hilo con el contenido recibido
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content,
    });

    // Corremos el mensaje con este objeto para saber qué pasó cuando se ejecutó el mensaje
    const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistant.id,
      instructions: assistant.instructions,
    });

    // Depuración
    console.log("\n\nTHREAD\n\n");
    console.dir(thread);
    console.log("\n\nASSISTANT\n\n");
    console.dir(assistant);
    console.log("\n\nMESSAGE\n\n");
    console.dir(message);
    console.log("\n\nRUN\n\n");
    console.dir(run);

    // Retornamos lo que nos da al revisar lo que tiene el run y enviamos el openai autorizado
    return await handleRunStatus(run, openai);
  } catch (error) {
    console.error(error);
    throw new Error("Error en la función main");
  }
}

// Función para obtener los mensajes de un hilo
async function getThread({ thread_id }: { thread_id: string }) {
  try {
    const openai = await connectOpenAI();
    const thread = await openai.beta.threads.messages.list(thread_id);
    console.dir(thread);

    const mensajes: ThreadMessage[] = (
      thread as unknown as ThreadResponse
    ).body.data.map((element) => {
      return {
        role: element.role,
        content: element.content[0].text.value,
      };
    });

    return mensajes.reverse();
  } catch (error) {
    console.error(error);
    return {
      error,
      ok: false,
      message: `No se encontró un hilo con el id ${thread_id}`,
    };
  }
}

export { main, getThread };
