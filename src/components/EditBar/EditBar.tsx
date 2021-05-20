import React from "react";
import { View } from "react-native";

import { Colors } from "../../styles";
import { hexToRGB } from "../../libs";
import EditBarButton from "../Buttons/EditBarButton";

interface EditBarProps {
  items: {
    text: string;
    iconName: string;
    onPress: () => void;
  }[];
}

const EditBar: React.FC<EditBarProps> = ({ items }: EditBarProps) => {
  return (
    <View
      style={{
        padding: 5,
        // height: 80,
        // paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: `rgba(${hexToRGB(Colors.GRAY[900])},0.6)`,
      }}
    >
      {items.map((item, index) => (
        <View key={index} style={{ flex: 1 }}>
          <EditBarButton
            text={item.text}
            onPress={item.onPress}
            iconName={item.iconName}
          />
        </View>
      ))}
    </View>
  );
};

export default EditBar;
