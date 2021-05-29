import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import I18n from "./../../i18n/";
import { Colors } from "./../../styles/";

interface StartMeasureButtonProps {
  onPress: () => void;
}

const StartMeasureButton: React.FC<StartMeasureButtonProps> = ({
  onPress,
}: StartMeasureButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.textButton}>{I18n.t("buttons.start_measure")}</Text>
    </TouchableOpacity>
  );
};

const size = 50;

const styles = StyleSheet.create({
  button: {
    margin: 30,
    height: size,
    borderRadius: size,
    backgroundColor: Colors.DarkForest[300],
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "center",
  },
});

export default StartMeasureButton;
