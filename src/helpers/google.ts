import { connectGoogleApi, spreadHoteles } from "../configs/google";

export async function readHoteles({ hoteles }) {
  const { sheets } = connectGoogleApi();
  const range = "sheet1!A2:C";
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadHoteles,
    range,
  });
  const encontrados = [];

  const respuesta = response.data.values.map((element, index) => {
    let [hotel, direccion, desayuno] = element;
    if (hoteles.includes(hotel.trim().toUpperCase())) {
      encontrados.push({
        row: index + 2,
        hotel,
        direccion,
        desayuno,
      });
      return null;
    } else {
      return {
        row: index + 2,
        hotel,
      };
    }
  });

  if (encontrados.length == hoteles.length) {
    return JSON.stringify({ encontrados });
  } else {
    return JSON.stringify({ lista_hoteles: respuesta, encontrados });
  }
}

export async function readHotelInfo({ indice }) {
  const { sheets } = connectGoogleApi();
  const range = `Sheet1!A${indice}:C${indice}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadHoteles,
    range,
  });

  const data = response.data.values.map(([hotel, direccion, desayuno]) => {
    return {
      hotel,
      direccion,
      desayuno,
    };
  });

  return JSON.stringify(data);
}
