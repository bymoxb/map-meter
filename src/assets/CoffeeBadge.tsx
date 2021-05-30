import React from "react";
import { Image, TouchableHighlight, Linking } from "react-native";

interface CoffeeBadgeProps {
  width?: number;
  height?: number;
}

const CoffeeBadge: React.FC<CoffeeBadgeProps> = ({
  width = 350,
  height = 200,
}: CoffeeBadgeProps) => {
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL("https://www.buymeacoffee.com/bymoxb")}
    >
      <Image
        style={{ width: width, height: height }}
        width={width}
        height={height}
        resizeMode="stretch"
        source={require("./img/coffe.jpg")}
      />
    </TouchableHighlight>
  );
};

export default CoffeeBadge;
