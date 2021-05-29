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
  StyleSheet,
} from "react-native";

import { Colors, Styles } from "../../styles";
import { hexToRGB } from "../../libs";
import {
  IArea,
  IUnitDistance,
  IUnitsArea,
  unitsArea,
  unitsDistance,
} from "../../models";
import { useTheme } from "../../context/ThemeProvider";

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
  const { theme } = useTheme();

  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const _styles = StyleSheet.create({
    modalBodyContainer: {
      backgroundColor: theme == "light" ? "white" : Colors.DarkForest[300],
    },
    container: {
      backgroundColor: theme == "light" ? "white" : Colors.DarkForest[300],
      borderColor: theme == "light" ? Colors.GRAY[300] : "black",
    },
    text: {
      color: theme == "light" ? "black" : Colors.GRAY[200],
    },
    textOption: {
      color: theme == "light" ? "black" : Colors.GRAY[200],
      textAlign: "center",
    },
  });

  return (
    <>
      <TouchableHighlight
        underlayColor={theme == "light" ? Colors.GRAY[300] : Colors.GRAY[700]}
        onPress={() => setVisibleDropdown(true)}
        style={[styles.container, _styles.container]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={[styles.textLeft, _styles.text]}>
              {I18n.t("labels.area")}
            </Text>
            <Text style={[styles.textLeft, _styles.text]}>
              {I18n.t("labels.perimeter")}
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text
              style={_styles.text}
            >{`${seleccion.area} ${seleccion.unidadArea.symbol}`}</Text>
            <Text
              style={_styles.text}
            >{`${seleccion.perimetro} ${seleccion.unidadPerimetro.symbol}`}</Text>
          </View>
          <View style={styles.dropDown}>
            <Icon name="chevron-down" size={26} />
          </View>
        </View>
      </TouchableHighlight>

      <Modal
        visible={visibleDropdown}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisibleDropdown(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisibleDropdown(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                //
              }}
            >
              <View
                style={[styles.modalBodyContainer, _styles.modalBodyContainer]}
              >
                <View style={{ flex: 1, marginRight: 5 }}>
                  <Text style={[styles.textTitle, _styles.text]}>
                    {I18n.t("labels.area")}
                  </Text>
                  {unitsArea.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        onSelectArea(item);
                        setVisibleDropdown(false);
                      }}
                      style={styles.optionButton}
                    >
                      <Text style={_styles.textOption}>
                        {`${item.name} (${item.symbol})`}
                      </Text>
                    </Pressable>
                  ))}
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Text style={[styles.textTitle, _styles.text]}>
                    {I18n.t("labels.distance")}
                  </Text>
                  {unitsDistance.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        onSelectDistancia(item);
                        setVisibleDropdown(false);
                      }}
                      style={styles.optionButton}
                    >
                      <Text style={_styles.textOption}>
                        {`${item.name} (${item.symbol})`}
                      </Text>
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

const styles = StyleSheet.create(Styles.Dropdown);

export default Dropdown;
