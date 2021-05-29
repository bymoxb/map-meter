export default {
  app_name: "Medidor de Mapas",
  buttons: {
    start_measure: "Empezar a medir",
    exit: "Salir",
    clean: "Limpiar",
    undo: "Deshacer",
    redo: "Rehacer",
    save: "Guardar",
  },
  labels: {
    precise: "Preciso",
    manual: "Manual",
    area: "Área",
    distance: "Distancia",
    perimeter: "Perímetro",
  },
  messages: {
    saved: "El archivo ha sido guardado",
    error_on_save: "No se pudo guardar el archivo",
  },
  units_area: {
    a: { key: "a", symbol: "a", name: "Área" },
    ha: { key: "ha", symbol: "ha", name: "Hectáreas" },
    m2: { key: "m2", symbol: "m²", name: "Metros cuadrados" },
    km2: { key: "km2", symbol: "km²", name: "Kilómetros cuadrados" },
    ft2: { key: "ft2", symbol: "ft²", name: "Pies cuadrados" },
    yd2: { key: "yd2", symbol: "yd²", name: "Yardas cuadradas" },
    in2: { key: "in2", symbol: "in²", name: "Pulgadas cuadradas" },
  },
  units_distance: {
    m: { key: "m", symbol: "m", name: "Metros" },
    km: { key: "km", symbol: "km", name: "Kilómetros" },
    cm: { key: "cm", symbol: "cm", name: "Centímetros" },
    mm: { key: "mm", symbol: "mm", name: "Milimetros" },
    mi: { key: "mi", symbol: "mi", name: "Millas" },
    sm: { key: "sm", symbol: "nmi", name: "Millas marinas" },
    ft: { key: "ft", symbol: "ft", name: "Pies" },
    in: { key: "in", symbol: "in", name: "Pulgadas" },
    yd: { key: "yd", symbol: "yd", name: "Yardas " },
  },
  screens: {
    titles: {
      area: "Medir áreas",
      distance: "Medir distancias",
      theme: "Tema",
    },
  },
  theme: {
    dark: "Tema oscuro",
    light: "Tema claro",
  },
};
