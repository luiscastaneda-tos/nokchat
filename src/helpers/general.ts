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
}) {
  let cupon = {
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
