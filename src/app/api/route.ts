import { getThread, main } from "../../model/chatgpt";

export async function GET(request: Request) {
  try {
    console.log(request);
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries()); // Obtener los parámetros de la query
    console.log(url.searchParams.entries());
    console.log(params);

    // Llamamos a getThread con los parámetros de la query
    if (!params.thread_id) {
      throw new Error("Missing thread_id parameter");
    }
    const result = await getThread({ thread_id: params.thread_id });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.error("Error en GET /api/chat:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Obtener el cuerpo de la solicitud (JSON)
    console.log(body);

    // Llamamos a main con el cuerpo de la solicitud
    const result = await main(body);
    console.log(result);
    const response = new Response(JSON.stringify(result), { status: 200 });
    console.log("****************************************");
    console.log(response);
    return response;
  } catch (err) {
    console.error("Error en POST /api/chat:", err);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 400 }
    );
  }
}
