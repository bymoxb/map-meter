import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { convertDistance, getPreciseDistance } from "geolib";
import I18n from "i18n-js";
import React, { useCallback, useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import MapView, { Marker, Polyline, Region } from "react-native-maps";
import StartMeasureButton from "../components/Buttons/StartMeasureButton";
import DropdownDistance from "../components/Dropdown/DropdownDistance";
import EditBar from "../components/EditBar/EditBar";
import Fab from "../components/Fab/Fab";
import LayersFab from "../components/Fab/LayersFab";
import MeasureTypeModal from "../components/Modals/MeasureTypeModal";
import { useTheme } from "../context/ThemeProvider";
import { hexToRGB, redoItems, round, saveAsGeoJson, undoItems } from "../libs";
import {
  IDistance,
  IUnitDistance,
  LatLng,
  TipoMedicion,
  unitsDistance,
} from "../models";
import { Colors, MapStyle, Styles } from "../styles";

const initialState: IDistance = {
  distancia: 0,
  unidadDistancia: unitsDistance[0],
  puntos: [],
};

const DistanceScreen: React.FC = () => {
  const { theme } = useTheme();

  const [isMapReady, setMapReady] = useState(false);
  const [tipo, setTipo] = useState<TipoMedicion>();
  const [visibleModalMT, setVisibleModalMT] = useState(false);
  const [seleccion, setSeleccion] = useState<IDistance>(initialState);
  const [region, setRegion] = useState<Region>({} as Region);
  const [undoList, setUndoList] = useState<LatLng[]>([]);
  const [layer, setLayer] = useState<"standard" | "satellite">("standard");

  const hadleTipoMedicion = (_tipo: TipoMedicion) => {
    setTipo(_tipo);
  };

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, [setMapReady]);

  const handleAddCoordinate = (coordinate: LatLng) => {
    if (!tipo) {
      return;
    }

    const listAux = [...seleccion.puntos, coordinate];
    const distance = calcDistance(listAux);

    saveCoordinateToList(distance, listAux);
  };

  const saveCoordinateToList = (distance: number, list: LatLng[]) => {
    setSeleccion({
      ...seleccion,
      distancia: round(distance, 3),
      puntos: list,
    });
  };

  const calcDistance = (items: LatLng[]) => {
    let distance = 0;

    if (items.length > 1) {
      for (let index = 0; index < items.length; index++) {
        try {
          const pi = items[index];
          const pn = items[index + 1];

          distance += getPreciseDistance(pi, pn);
        } catch (error) {
          //
        }
      }
    }

    return distance;
  };

  //#region EDIT BAR
  const clean = () => {
    setUndoList([]);
    setSeleccion(initialState);
    // makeCalcs([]);
  };

  const exit = () => {
    clean();
    setTipo(undefined);
  };

  const save = async () => {
    const result = await saveAsGeoJson(seleccion, "line");

    let message = "";
    if (result) {
      message = I18n.t("messages.saved");
    } else {
      message = I18n.t("messages.error_on_save");
    }

    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const onChangeUnitDistance = (unidad: IUnitDistance) => {
    let distance = calcDistance(seleccion.puntos);

    distance = convertDistance(distance, unidad.key);

    setSeleccion({
      ...seleccion,
      distancia: round(distance, 3),
      unidadDistancia: unidad,
    });
  };

  const undo = () => {
    const list = undoItems(seleccion.puntos, undoList);
    const distance = calcDistance(list);
    saveCoordinateToList(distance, list);
  };

  const redo = () => {
    const [mainList, _undoList] = redoItems(seleccion.puntos, undoList);
    setUndoList(_undoList);
    saveCoordinateToList(calcDistance(mainList), mainList);
  };
  //#endregion

  return (
    <View style={styles.main}>
      {/* MODAL TIPO MEDICIÓN */}
      <MeasureTypeModal
        visible={visibleModalMT}
        closeModal={() => setVisibleModalMT(false)}
        onPress={hadleTipoMedicion}
      />

      {/* MAP */}
      <MapView
        loadingEnabled
        showsUserLocation
        customMapStyle={theme === "light" ? [] : MapStyle}
        mapType={layer}
        onMapReady={handleMapReady}
        style={isMapReady ? styles.map : {}}
        onRegionChangeComplete={(region_) => setRegion(region_)}
        onPress={
          tipo === TipoMedicion.manual
            ? ({ nativeEvent: { coordinate } }) => {
                handleAddCoordinate({
                  ...coordinate,
                  id: Date.now(),
                  selected: false,
                });
              }
            : undefined
        }
      >
        <Polyline
          coordinates={seleccion.puntos}
          strokeWidth={5}
          strokeColor={`rgba(${hexToRGB(Colors.RED[400])},1)`}
        />
        {seleccion.puntos.map((item) => (
          <Marker
            key={item.id}
            coordinate={item}
            onPress={() =>
              handleAddCoordinate({
                ...item,
                id: Date.now(),
              })
            }
          />
        ))}
      </MapView>

      {/* DROPDOWN */}
      {tipo && (
        <View
          style={{
            position: "absolute",
            width: "70%",
            margin: 10,
            alignSelf: "center",
          }}
        >
          <DropdownDistance
            seleccion={seleccion}
            onSelectDistancia={onChangeUnitDistance}
          />
        </View>
      )}

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
          {/* <Crosshair /> */}
          <Icon
            name="crosshairs"
            size={20}
            color={layer == "standard" ? "black" : "white"}
          />
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
              handleAddCoordinate({
                ...region,
                id: Date.now(),
                selected: false,
              });
            }}
          />
        </View>
      )}

      {/* START BUTTON */}
      {!tipo && (
        <View style={{ ...styles.floatContainer, bottom: 0 }}>
          <StartMeasureButton onPress={() => setVisibleModalMT(true)} />
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
              setLayer(layer == "satellite" ? "standard" : "satellite")
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

const styles = StyleSheet.create(Styles.Main);

export default DistanceScreen;
