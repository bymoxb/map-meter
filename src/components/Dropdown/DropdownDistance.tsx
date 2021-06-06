import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import I18n from "i18n-js";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeProvider";
import { hexToRGB } from "../../libs";
import { IDistance, IUnitDistance, unitsDistance } from "../../models";
import { Colors, Styles } from "../../styles";

interface DropdownDistanceProps {
  seleccion: IDistance;
  onSelectDistancia: (item: IUnitDistance) => void;
}

const DropdownDistance: React.FC<DropdownDistanceProps> = ({
  seleccion,
  onSelectDistancia,
}: DropdownDistanceProps) => {
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
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={[styles.textLeft, _styles.text]}>
              {I18n.t("labels.distance")}
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 5, justifyContent: "center" }}>
            <Text style={_styles.text}>
              {`${seleccion.distancia} ${seleccion.unidadDistancia.symbol}`}
            </Text>
          </View>
          <View>
            <View style={[styles.dropDown, _styles.container]}>
              <Icon name="chevron-down" size={26} />
            </View>
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
                <View style={{ flex: 1 }}>
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

export default DropdownDistance;
