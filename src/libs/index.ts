import { IArea } from "../models";
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
  const base = Math.pow(10, nDecimal);
  return Math.round(value * base) / base;
};

export const saveAsGeoJson = async (
  seleccion: IArea,
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

  const data =
    type === "polygon"
      ? parsePolygonToGeoJSON(seleccion)
      : parseLineToGeoJSON(seleccion);

  await fs.StorageAccessFramework.writeAsStringAsync(path, data, {
    encoding: fs.EncodingType.UTF8,
  });

  console.log(data);

  return true;
};

const parseLineToGeoJSON = (seleccion: IArea): string => {
  return "";
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
