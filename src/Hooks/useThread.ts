"use client";
import { useLocalStorage } from "./useLocalStorage";
import { useState, useCallback } from "react";

// Definir tipos
interface Message {
  // Aquí puedes agregar las propiedades específicas que esperas en un mensaje
  id: string;
  content: string;
  timestamp: string;
}

interface Thread {
  id: string;
  name: string;
}

export function useThread() {
  const { remove, save, threads } = useLocalStorage();
  const [thread, setThread] = useState<Thread | null>(null); // thread puede ser un objeto Thread o null
  const [loading, setLoading] = useState<boolean>(false); // El estado de carga es un booleano
  const [pendingMessages, setPendingMessages] = useState<Message[]>([]); // pendingMessages es un arreglo de objetos Message

  // Función para remover un thread
  const removeThread = () => {
    setThread(null);
  };

  // Función para guardar un thread
  const saveThread = useCallback(
    (thread: Thread) => {
      setThread(thread);
      save(thread.id); // Usamos el ID del thread al guardarlo
    },
    [save]
  );

  // Función para obtener mensajes de un thread
  const getMessages = useCallback(
    async (thread: string) => {
      setLoading(true);
      try {
        console.log(thread);
        const response = await fetch(`${URL}${thread}`);
        const data = await response.json();

        // Si hay error en la respuesta, lanzamos un error
        if (data.error) {
          throw new Error(
            `${data.message} \n${data.error.status}: ${data.error.type}\n${data.error.error.message}`
          );
        }

        setPendingMessages(data); // Establecemos los mensajes pendientes
        saveThread({ id: thread, name: getTimeFormat() }); // Guardamos el thread con el formato de tiempo
      } catch (err) {
        removeThread(); // En caso de error, removemos el thread
        setPendingMessages([]); // Limpiamos los mensajes pendientes
        alert("Ha ocurrido un error, verifica la consola");
        console.error(err);
      } finally {
        setLoading(false); // Terminamos de cargar
      }
    },
    [saveThread]
  );

  // Función para limpiar la lista de threads
  const clearList = () => {
    remove(); // Limpiamos todos los threads almacenados
  };

  return {
    getMessages,
    thread,
    removeThread,
    clearList,
    loading,
    pendingMessages,
    threads,
    saveThread,
  };
}

// URL de la API para obtener los mensajes
const URL = "api/?thread_id=";

// Función para obtener la fecha y hora en formato legible
function getTimeFormat(): string {
  const fechaActual = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(fechaActual);
}
