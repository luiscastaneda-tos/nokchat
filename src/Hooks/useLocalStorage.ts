"use client"; // Asegura que se ejecute en el cliente

import { useEffect, useState } from "react";

interface Thread {
  id: string;
  name: string;
}

const keyList = "threads";

export function useLocalStorage() {
  // Estado para almacenar los hilos
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    // Verificar si estamos en el cliente (se ejecuta solo en el navegador)
    if (typeof window !== "undefined") {
      // Obtener los datos de localStorage y parsearlos
      const listStored = localStorage.getItem(keyList);
      if (listStored) {
        setThreads(JSON.parse(listStored));
      }
    }
  }, []); // Solo se ejecuta una vez después de montar el componente

  // Guardar un nuevo valor en localStorage
  const saveToLocalStorage = (newValue: string) => {
    if (typeof window !== "undefined") {
      const list = localStorage.getItem(keyList);
      const updatedThreads: Thread[] = list ? JSON.parse(list) : [];

      // Verificar si el thread ya existe
      const exists = updatedThreads.some((element) => element.id === newValue);
      if (exists) return;

      // Crear un nuevo thread con la fecha actual
      const newThread: Thread = { id: newValue, name: getTimeFormat() };

      // Actualizar el estado y localStorage
      const updatedList = [newThread, ...updatedThreads];
      setThreads(updatedList);
      localStorage.setItem(keyList, JSON.stringify(updatedList));
    }
  };

  // Eliminar todos los elementos del localStorage
  const removeToLocalStorage = () => {
    if (typeof window !== "undefined") {
      setThreads([]);
      localStorage.removeItem(keyList);
    }
  };

  return {
    threads,
    save: saveToLocalStorage,
    remove: removeToLocalStorage,
  };
}

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
