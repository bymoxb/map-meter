import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import IconFA from "@expo/vector-icons/FontAwesome";
import IconMI from "@expo/vector-icons/MaterialIcons";

import { IconFamily } from "../../models";
import { Colors } from "../../styles";
import { hexToRGB } from "../../libs";
import { useTheme } from "../../context/ThemeProvider";

interface MeasureTypeButtonProps {
  text: string;
  iconName: any;
  onPress: () => void;
  iconFamily: IconFamily;
}

const iconSize = 35;

const MeasureTypeButton: React.FC<MeasureTypeButtonProps> = ({
  text,
  onPress,
  iconName,
  iconFamily,
}: MeasureTypeButtonProps) => {
  const { theme } = useTheme();

  const _styles = StyleSheet.create({
    textOption: {
      color: theme == "light" ? Colors.DarkForest[300] : "white",
    },
  });

  const drawIcon = () => {
    switch (iconFamily) {
      case IconFamily.FontAwesome:
        return (
          <IconFA
            name={iconName}
            size={iconSize}
            color={_styles.textOption.color}
          />
        );
      case IconFamily.MaterialIcons:
        return (
          <IconMI
            name={iconName}
            size={iconSize}
            color={_styles.textOption.color}
          />
        );
      default:
        break;
    }
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.button}
      underlayColor={`rgba(${hexToRGB(Colors.GRAY[900])},0.1)`}
    >
      <View style={styles.row}>
        <View style={styles.iconContainer}>{drawIcon()}</View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, _styles.textOption]}>{text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: iconSize + 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
  },
});

export default MeasureTypeButton;
