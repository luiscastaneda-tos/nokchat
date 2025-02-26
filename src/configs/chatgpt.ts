import { OpenAI } from "openai";

// Esta función conecta con OpenAI y devuelve la conexión.
export function connectOpenAI() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Usamos las variables de entorno
    organization: process.env.ORGANIZATION,
    project: process.env.ID_PROJECT,
  });

  return openai;
}

// Guardamos las variables de los asistentes (ID específicos)
export const assistants = {
  assistant_id: "asst_bzwg7fR39wMhTewlkd10Su4K",
  assistant_reportes: "asst_duBrruFXQaelQe0pyXEXhqsh",
  assistant_cotizaciones: "asst_A9o41hHE0OGDa7fTs6kihshz",
};
