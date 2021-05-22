import { IUnitDistance, LatLng } from "..";

interface IDistance {
  distancia: number;
  unidadDistancia: IUnitDistance;
  //
  puntos: LatLng[];
}

export default IDistance;
