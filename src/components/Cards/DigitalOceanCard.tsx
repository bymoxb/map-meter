import I18n from "i18n-js";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DigitalOcean from "../../assets/svg/DigitalOcean";
import BaseInfoCard from "./BaseInfoCard";

const DigitalOceanCard = () => {
  return (
    <BaseInfoCard
      title={I18n.t("labels.sponsors")}
      link="https://m.do.co/c/c088a55413a2"
    >
      <DigitalOcean />
    </BaseInfoCard>
  );
};

export default DigitalOceanCard;

const styles = StyleSheet.create({});
