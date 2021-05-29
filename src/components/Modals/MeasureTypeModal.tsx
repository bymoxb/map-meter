import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeProvider";
import { IconFamily, TipoMedicion } from "../../models";
import { Colors } from "../../styles";
import MeasureTypeButton from "../Buttons/MeasureTypeButton";
import I18n from "./../../i18n";

interface MeasureTypeModalProps {
  visible: boolean;
  closeModal: () => void;
  onPress: (tipo: TipoMedicion) => void;
}

const MeasureTypeModal: React.FC<MeasureTypeModalProps> = ({
  visible,
  closeModal,
  onPress,
}: MeasureTypeModalProps) => {
  const { theme } = useTheme();

  const handleOnPress = (tipo: TipoMedicion) => {
    closeModal();
    onPress(tipo);
  };

  const items = [
    {
      text: I18n.t("labels.manual"),
      iconFamily: IconFamily.MaterialIcons,
      iconName: "touch-app",
      onPress: () => handleOnPress(TipoMedicion.manual),
    },
    {
      text: I18n.t("labels.precise"),
      iconFamily: IconFamily.FontAwesome,
      iconName: "crosshairs",
      onPress: () => handleOnPress(TipoMedicion.preciso),
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={[styles.centeredView]}>
          <TouchableWithoutFeedback
            onPress={() => {
              //
            }}
          >
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor:
                    theme == "light" ? "white" : Colors.DarkForest[300],
                },
              ]}
            >
              {items.map((item, index) => (
                <MeasureTypeButton
                  key={index}
                  text={item.text}
                  iconName={item.iconName}
                  iconFamily={item.iconFamily}
                  onPress={item.onPress}
                />
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgba(0,0,0,0.5)`,
  },
  modalView: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MeasureTypeModal;
