import I18n from "i18n-js";
import React from "react";
import AreaScreen from "../screens/AreaScreen";
import DistanceScreen from "../screens/DistanceScreen";

interface Screen {
  path: string;
  label: string;
  component: React.FC;
  icon: {
    family: "FontAwesome5" | "MaterialCommunityIcons";
    name: string;
    size?: number;
    color?: string;
  };
}

export const screens: Screen[] = [
  {
    path: "DistanceScreen",
    label: I18n.t("screens.titles.distance"),
    component: DistanceScreen,
    icon: {
      name: "map-marker-distance",
      family: "MaterialCommunityIcons",
    },
  },
  {
    path: "AreaScreen",
    label: I18n.t("screens.titles.area"),
    component: AreaScreen,
    icon: {
      name: "draw-polygon",
      family: "FontAwesome5",
    },
  },
];
