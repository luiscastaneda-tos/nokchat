type Cupon = {
  hotel: string;
  direccion: string;
  checkin: string;
  checkout: string;
  noches: number;
  noktos: number;
  desayuno: string;
  notas: string;
  precio: number;
  impuestos: number;
};

export async function createCupon({
  hotel,
  direccion,
  checkin,
  checkout,
  noches,
  noktos,
  desayuno,
  notas,
  precio = 0,
}: Cupon) {
  const cupon = {
    hotel,
    direccion,
    checkin,
    checkout,
    noches,
    noktos,
    desayuno,
    notas,
    precio: precio == 0 ? noktos * 145 : precio / 1.16,
    impuestos: precio == 0 ? noktos * 168.2 : precio,
  };
  return "\n" + JSON.stringify({ cupon }) + "\n";
}
