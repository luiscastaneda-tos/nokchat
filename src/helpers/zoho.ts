import { obtenerAcces } from "../configs/zoho";

export async function getTicketData({
  ticketId,
}: {
  ticketId: string;
}): Promise<string> {
  const accessToken = await obtenerAcces();
  const url = `https://desk.zoho.com/api/v1/tickets/${ticketId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.statusText}`);
    }

    const ticketData = await response.json();
    const respuesta = {
      resolution: ticketData.resolution,
      checkin: ticketData.cf.cf_check_in
        ? ticketData.cf.cf_check_in
        : ticketData.customFields["CHECK IN"],
      checkout: ticketData.cf.cf_check_out
        ? ticketData.cf.cf_check_out
        : ticketData.customFields["CHECK OUT"],
      noches: ticketData.cf.cf_noches
        ? ticketData.cf.cf_noches
        : ticketData.customFields["Noches"],
    };

    return JSON.stringify(respuesta);
  } catch (error) {
    console.error("Error al obtener el ticket:", error);
    return JSON.stringify({ error: (error as Error)?.message });
  }
}
