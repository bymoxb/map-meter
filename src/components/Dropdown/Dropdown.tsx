import React, { useState } from "react";
import I18n from "i18n-js";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  View,
  Modal,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

import { Colors } from "../../styles";
import { hexToRGB } from "../../libs";
import {
  IArea,
  IUnitDistance,
  IUnitsArea,
  unitsArea,
  unitsDistance,
} from "../../models";

interface DropdownProps {
  seleccion: IArea;
  onSelectArea: (item: IUnitsArea) => void;
  onSelectDistancia: (item: IUnitDistance) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  seleccion,
  onSelectArea,
  onSelectDistancia,
}: DropdownProps) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          height: 50,
          borderWidth: 2,
          borderRadius: 50 / 2,
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          backgroundColor: "white",
          justifyContent: "center",
          borderColor: Colors.GRAY[300],
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>
            {I18n.t("labels.area")}
          </Text>
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>
            {I18n.t("labels.perimeter")}
          </Text>
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text>{`${seleccion.area} ${seleccion.unidadArea.symbol}`}</Text>
          <Text>{`${seleccion.perimetro} ${seleccion.unidadPerimetro.symbol}`}</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={Colors.GRAY[300]}
            onPress={() => setVisibleDropdown(true)}
            style={{
              borderWidth: 2,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              borderColor: Colors.GRAY[300],
              backgroundColor: `rgba(${hexToRGB(Colors.GRAY[300])},0.3)`,
            }}
          >
            <Icon name="chevron-down" size={26} />
          </TouchableHighlight>
        </View>
      </View>
      <Modal
        visible={visibleDropdown}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisibleDropdown(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisibleDropdown(false)}>
          <View
            style={{
              flex: 1,
              paddingTop: 60 + 38,
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                //
              }}
            >
              <View
                style={{
                  margin: 20,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  width: "90%",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    {I18n.t("labels.area")}
                  </Text>
                  {unitsArea.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        onSelectArea(item);
                        setVisibleDropdown(false);
                      }}
                      style={{
                        paddingVertical: 8,
                        borderBottomWidth: 0.5,
                        borderBottomColor: Colors.GRAY[300],
                      }}
                    >
                      <Text
                        style={{ textAlign: "center" }}
                      >{`${item.name} (${item.symbol})`}</Text>
                    </Pressable>
                  ))}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    {I18n.t("labels.distance")}
                  </Text>
                  {unitsDistance.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        onSelectDistancia(item);
                        setVisibleDropdown(false);
                      }}
                      style={{
                        marginHorizontal: 5,
                        paddingVertical: 8,
                        borderBottomWidth: 0.5,
                        borderBottomColor: Colors.GRAY[300],
                      }}
                    >
                      <Text
                        style={{ textAlign: "center" }}
                      >{`${item.name} (${item.symbol})`}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default Dropdown;
