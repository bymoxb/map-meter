import React, { useState } from "react";
import * as Location from "expo-location";
import { View, StyleSheet, ToastAndroid } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import StartMeasureButton from "../components/Buttons/StartMeasureButton";
import MapView, {
  Marker,
  Polygon,
  Region,
  LatLng as LatLngBase,
} from "react-native-maps";
import {
  getAreaOfPolygon,
  convertArea,
  getPreciseDistance,
  convertDistance,
} from "geolib";

import I18n from "./../i18n";
import { Colors } from "../styles";
import { hexToRGB, round, saveAsGeoJson } from "../libs";
import EditBar from "../components/EditBar/EditBar";
import LayersFab from "../components/Fab/LayersFab";
import Dropdown from "../components/Dropdown/Dropdown";
import MeasureTypeModal from "../components/Modals/MeasureTypeModal";
import {
  IArea,
  IUnitDistance,
  IUnitsArea,
  TipoMedicion,
  UnitsArea,
  LatLng,
  unitsArea,
  unitsDistance,
} from "../models/";
import Crosshair from "../libs/Crosshair";
import Fab from "../components/Fab/Fab";

const initialState: IArea = {
  area: 0.0,
  perimetro: 0.0,
  puntos: [],
  unidadArea: unitsArea[0],
  unidadPerimetro: unitsDistance[0],
};

const AreaScreen: React.FC = () => {
  const [visibleModalMT, setVisibleModalMT] = useState(false);
  const [tipo, setTipo] = useState<TipoMedicion>();
  const [seleccion, setSeleccion] = useState<IArea>(initialState);
  const [mapLayer, setMapLayer] =
    useState<"standard" | "satellite">("standard");
  const [undoList, setUndoList] = useState<LatLng[]>([]);

  const [userRegion, setUserRegion] = useState<Region>();
  const [region, setRegion] = useState<Region>({} as Region);

  const hadleTipoMedicion = (_tipo: TipoMedicion) => {
    console.log(_tipo);

    setTipo(_tipo);
  };

  const addPuntoToList = (coordinate: LatLng) => {
    if (!tipo) {
      return;
    }

    const listAux = [...seleccion.puntos, coordinate];
    makeCalcs(listAux);
  };

  const makeCalcs = (items: LatLng[]) => {
    const area = getArea(items);
    const peri = getPerimeter(items);

    setSeleccion({
      ...seleccion,
      area: round(area), //area, //round(area, 5),
      perimetro: round(peri), //peri, //round(area, 5),
      puntos: items,
    });
  };

  const getPerimeter = (items: LatLng[]) => {
    let peri = 0;

    if (items.length > 1) {
      for (let index = 0; index < items.length; index++) {
        try {
          const pi = items[index];
          const pn = items[index + 1];

          peri += getPreciseDistance(pi, pn);
        } catch (error) {
          //
        }
      }
      peri += getPreciseDistance(items[0], items[items.length - 1]);
    }

    console.log("f", peri);
    return peri;
  };

  const getArea = (items: LatLng[]) => {
    let area = getAreaOfPolygon(items);

    if (seleccion.unidadArea.id !== UnitsArea.m2) {
      area = convertArea(area, seleccion.unidadArea.key);
    }
    return area;
  };

  const undo = () => {
    let items = [...seleccion.puntos];
    const item = items.pop();
    if (!item) {
      items = [];
    } else {
      undoList.push(item);
    }

    makeCalcs(items);
  };

  const redo = () => {
    const _undoList = [...undoList];
    const list = [...seleccion.puntos];

    const item = _undoList.pop();

    if (item) {
      list.push(item);
    }

    setUndoList(_undoList);
    makeCalcs(list);
  };

  const clean = () => {
    setUndoList([]);
    setSeleccion(initialState);
    makeCalcs([]);
  };

  const exit = () => {
    setTipo(undefined);
    clean();
  };

  const handleConvertUnitArea = (unidad: IUnitsArea) => {
    let area = getAreaOfPolygon(seleccion.puntos);

    area = convertArea(area, unidad.key);

    setSeleccion({
      ...seleccion,
      area: round(area),
      unidadArea: unidad,
    });
  };

  const handleConvertUnitDistance = (unidad: IUnitDistance) => {
    let distance = getPerimeter(seleccion.puntos);

    distance = convertDistance(distance, unidad.key);

    setSeleccion({
      ...seleccion,
      perimetro: round(distance),
      unidadPerimetro: unidad,
    });
  };

  const location = (_location: Location.LocationObject) => {
    setUserRegion({
      latitude: _location.coords.latitude,
      longitude: _location.coords.longitude,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    });
  };

  const updateMarker = (coordinate: LatLngBase, item: LatLng) => {
    const newList = seleccion.puntos.map((_item) => {
      if (item.id == _item.id) {
        const aux: LatLng = {
          ..._item,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        };
        return aux;
      }
      return _item;
    });

    setSeleccion({
      ...seleccion,
      puntos: newList,
      area: round(getArea(newList)),
      perimetro: round(getPerimeter(newList)),
    });
  };

  const onPressMarker = (item: LatLng) => {
    const newList = seleccion.puntos.map((_item) => {
      if (_item.selected) {
        const aux: LatLng = {
          ..._item,
          selected: false,
        };
        return aux;
      }
      if (item.id == _item.id) {
        const aux: LatLng = {
          ..._item,
          selected: true,
        };
        return aux;
      }
      return _item;
    });

    setSeleccion({
      ...seleccion,
      puntos: newList,
    });
  };

  const save = async () => {
    const result = await saveAsGeoJson(seleccion, "polygon");

    let message = "";
    if (result) {
      message = I18n.t("messages.saved");
    } else {
      message = I18n.t("messages.error_on_save");
    }

    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={{ flex: 1 }}>
      <MeasureTypeModal
        visible={visibleModalMT}
        closeModal={() => setVisibleModalMT(false)}
        onPress={hadleTipoMedicion}
      />

      {/* MAP */}
      <MapView
        loadingEnabled
        followsUserLocation={false}
        showsUserLocation
        mapType={mapLayer}
        style={styles.map}
        onRegionChangeComplete={(region_) => setRegion(region_)}
        onPress={({ nativeEvent: { coordinate } }) => {
          if (tipo === TipoMedicion.preciso) {
            return;
          }
          addPuntoToList({
            ...coordinate,
            id: Date.now(),
            selected: false,
          });
        }}
      >
        {tipo !== undefined && (
          <View>
            {seleccion.puntos.map((item, index) => (
              <Marker
                key={index}
                coordinate={item}
                tracksViewChanges={false}
                draggable={item.selected}
                rotation={item.selected ? 180 : undefined}
                anchor={
                  item.selected ? { x: 0.5, y: 0.92 } : { x: 0.5, y: 0.5 }
                }
                onDragEnd={({ nativeEvent: { coordinate } }) =>
                  updateMarker(coordinate, item)
                }
                onPress={() => onPressMarker(item)}
              >
                {item.selected ? (
                  <View>
                    <Icon
                      name="map-marker"
                      size={100}
                      color={Colors.BLUE[500]}
                      style={{ opacity: 0.8 }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      borderWidth: 2,
                      backgroundColor: `rgba(${hexToRGB(Colors.WHITE)},0.6)`,
                      width: 25,
                      height: 25,
                      borderRadius: 25 / 2,
                      borderColor: Colors.GRAY[500],
                    }}
                  />
                )}
              </Marker>
            ))}
            {seleccion.puntos.length > 1 && (
              <Polygon
                coordinates={seleccion.puntos}
                strokeWidth={3}
                strokeColor={`rgba(${hexToRGB(Colors.RED[400])},1)`}
                fillColor={`rgba(${hexToRGB(Colors.RED[400])},0.3)`}
              />
            )}
          </View>
        )}
      </MapView>

      {/* CROSSHAIR */}
      {tipo === TipoMedicion.preciso && (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Crosshair />
          {/* <Icon name="crosshairs" size={100} /> */}
        </View>
      )}

      {/* DROPDOWN */}
      {tipo && (
        <View
          style={{ position: "absolute", width: "100%", alignItems: "center" }}
        >
          <View
            style={{
              width: "70%",
              margin: 10,
            }}
          >
            <Animatable.View animation="fadeInDown">
              <Dropdown
                seleccion={seleccion}
                onSelectArea={handleConvertUnitArea}
                onSelectDistancia={handleConvertUnitDistance}
              />
            </Animatable.View>
          </View>
        </View>
      )}

      {/* START BUTTON */}
      {!tipo && (
        <View style={{ ...styles.floatContainer, bottom: 0 }}>
          <StartMeasureButton onPress={() => setVisibleModalMT(true)} />
        </View>
      )}

      {/* ADD POINT BUTTON */}
      {tipo === TipoMedicion.preciso && (
        <View
          style={{
            ...styles.floatContainerWrap,
            bottom: 100,
            right: 0,
            marginRight: 10,
          }}
        >
          <Fab
            iconName="plus"
            onPress={() => {
              addPuntoToList({
                ...region,
                id: Date.now(),
                selected: false,
              });
            }}
          />
        </View>
      )}

      {/* LAYER BUTTON */}
      {tipo && (
        <View
          style={{
            ...styles.floatContainerWrap,
            bottom: 100,
            marginLeft: 10,
          }}
        >
          <LayersFab
            onPress={() =>
              setMapLayer(mapLayer == "satellite" ? "standard" : "satellite")
            }
          />
        </View>
      )}

      {/* EDIT BAR */}
      {tipo && (
        <View style={{ ...styles.floatContainer, bottom: 0 }}>
          <View>
            <EditBar
              items={[
                {
                  text: I18n.t("buttons.exit"),
                  onPress: exit,
                  iconName: "exit-run",
                },
                {
                  text: I18n.t("buttons.clean"),
                  onPress: clean,
                  iconName: "trash-can",
                },
                {
                  text: I18n.t("buttons.save"),
                  onPress: save,
                  iconName: "content-save-move-outline",
                },
                {
                  text: I18n.t("buttons.undo"),
                  onPress: undo,
                  iconName: "undo",
                },
                {
                  text: I18n.t("buttons.redo"),
                  onPress: redo,
                  iconName: "redo",
                },
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  floatContainerWrap: {
    position: "absolute",
  },
  floatContainer: {
    position: "absolute",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default AreaScreen;
