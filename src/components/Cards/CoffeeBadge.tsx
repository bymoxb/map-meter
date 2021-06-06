import I18n from "i18n-js";
import React from "react";
import { Image, TouchableHighlight, Linking } from "react-native";
import BaseInfoCard from "./BaseInfoCard";

interface CoffeeBadgeProps {
  width?: number;
  height?: number;
}

const CoffeeBadge: React.FC<CoffeeBadgeProps> = ({
  width = 350,
  height = 150,
}: CoffeeBadgeProps) => {
  return (
    <BaseInfoCard
      title={I18n.t("messages.coffee")}
      link="https://www.buymeacoffee.com/bymoxb"
    >
      <Image
        style={{ width: width, height: height }}
        width={width}
        height={height}
        resizeMode="stretch"
        source={require("../../assets/img/coffe.jpg")}
      />
    </BaseInfoCard>
  );
};

export default CoffeeBadge;
