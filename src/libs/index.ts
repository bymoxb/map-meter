import { IArea, IDistance, LatLng } from "../models";
import * as fs from "expo-file-system";

export const hexToRGB = (hex: string): string => {
  if (hex.charAt(0) === "#") {
    hex = hex.substr(1);
  }
  if (hex.length < 2 || hex.length > 6) {
    return "0,0,0";
  }
  const values = hex.split("");
  let r, g, b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return "0,0,0";
  }
  const rgb = [r, g, b];

  return rgb.toString();
};

export const round = (value: number, nDecimal = 5): number => {
  if (value % 1 === 0) {
    return value;
  }

  const base = Math.pow(10, nDecimal);
  return Math.round(value * base) / base;
};

export const saveAsGeoJson = async (
  seleccion: IArea | IDistance,
  type: "polygon" | "line"
): Promise<boolean> => {
  if (seleccion.puntos.length < 1) {
    return false;
  }

  const permission =
    await fs.StorageAccessFramework.requestDirectoryPermissionsAsync(
      fs.documentDirectory
    );

  if (!permission.granted) {
    return false;
  }

  const path = await fs.StorageAccessFramework.createFileAsync(
    permission.directoryUri,
    `map-${type}-${Date.now()}.json`,
    "utf8"
  );

  const payload =
    type === "polygon"
      ? parsePolygonToGeoJSON(seleccion as IArea)
      : parseLineToGeoJSON(seleccion as IDistance);

  await fs.StorageAccessFramework.writeAsStringAsync(path, payload, {
    encoding: fs.EncodingType.UTF8,
  });

  console.log(payload);

  return true;
};

const parseLineToGeoJSON = (seleccion: IDistance): string => {
  return JSON.stringify(
    {
      type: "LineString",
      properties: {
        distance: {
          value: seleccion.distancia,
          units: {
            name: seleccion.unidadDistancia.name,
            symbol: seleccion.unidadDistancia.symbol,
          },
        },
      },
      coordinates: seleccion.puntos.map((item) => [
        item.longitude,
        item.latitude,
      ]),
    },

    null,
    4
  );
};

const parsePolygonToGeoJSON = (seleccion: IArea): string => {
  const list = [...seleccion.puntos, seleccion.puntos[0]];

  return JSON.stringify(
    {
      type: "Polygon",
      properties: {
        area: {
          value: seleccion.area,
          units: {
            name: seleccion.unidadArea.name,
            symbol: seleccion.unidadArea.symbol,
          },
        },
        perimeter: {
          value: seleccion.perimetro,
          units: {
            name: seleccion.unidadPerimetro.name,
            symbol: seleccion.unidadPerimetro.symbol,
          },
        },
      },
      coordinates: [list.map((item) => [item.longitude, item.latitude])],
    },
    null,
    4
  );
};

export const undoItems = (
  seleccion: LatLng[],
  undoList: LatLng[]
): LatLng[] => {
  let items = [...seleccion];
  const item = items.pop();
  if (!item) {
    items = [];
  } else {
    undoList.push(item);
  }

  return items;
};

export const redoItems = (
  seleccion: LatLng[],
  undoList: LatLng[]
): LatLng[][] => {
  const list = [...seleccion];
  const _undoList = [...undoList];

  const item = _undoList.pop();

  if (item) {
    list.push(item);
  }

  return [list, _undoList];
};
