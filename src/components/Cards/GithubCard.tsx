import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import I18n from "i18n-js";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import BaseInfoCard from "./BaseInfoCard";

interface GithubCardProps {
  width?: number;
  height?: number;
}

const GithubCard: React.FC<GithubCardProps> = ({
  width = 350,
  height = 150,
}: GithubCardProps) => {
  const { theme } = useTheme();

  return (
    <BaseInfoCard
      title={I18n.t("labels.source_code")}
      link="https://github.com/bymoxb/map-meter"
    >
      <Icon
        name="github"
        size={height}
        color={theme == "dark" ? "white" : "black"}
      />
    </BaseInfoCard>
  );
};

export default GithubCard;
