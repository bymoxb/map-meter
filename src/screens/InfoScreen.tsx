import I18n from "i18n-js";
import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import CoffeeBadge from "../components/Cards/CoffeeBadge";
import DigitalOceanCard from "../components/Cards/DigitalOceanCard";
import GithubCard from "../components/Cards/GithubCard";
import { useTheme } from "../context/ThemeProvider";
import { Colors } from "../styles";

const InfoScreen: React.FC = () => {
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
        {/* --- */}
        <GithubCard />
        {/* --- */}
        <CoffeeBadge />
        {/* --- */}
        <DigitalOceanCard />

        <Text style={[styles.hint, _style.text]}>
          {I18n.t("messages.tap_on_image")}
        </Text>
      </View>
    </ScrollView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  hint: {
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});
