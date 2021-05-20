import { IUnitDistance, IUnitsArea, LatLng } from "..";

interface IArea {
  area: number;
  unidadArea: IUnitsArea;
  //
  perimetro: number;
  unidadPerimetro: IUnitDistance;
  //
  puntos: LatLng[];
}

export default IArea;
