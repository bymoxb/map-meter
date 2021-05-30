import I18n from "i18n-js";
import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import CoffeeBadge from "../assets/CoffeeBadge";
import DigitalOceanBadge from "../assets/DigitalOceanBadge";
import { useTheme } from "../context/ThemeProvider";
import { Colors } from "../styles";

const InfoScreen = () => {
  const { theme } = useTheme();

  const _style = StyleSheet.create({
    container: {
      backgroundColor: theme == "light" ? "white" : Colors.DarkForest[500],
    },
    text: {
      color: theme == "light" ? "black" : "white",
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, _style.container]}>
        <Text style={[styles.title, _style.text, { marginBottom: 30 }]}>
          {I18n.t("messages.coffee")}
        </Text>
        <CoffeeBadge />
        <View style={{ paddingVertical: 30 }} />
        <Text style={[styles.title, _style.text]}>
          {I18n.t("labels.sponsors")}
        </Text>
        <DigitalOceanBadge />
      </View>
    </ScrollView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
