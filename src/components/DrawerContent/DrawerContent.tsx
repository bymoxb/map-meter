import * as IconBase from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-paper";
import Logo from "../../assets/Logo";
import { useTheme } from "../../context/ThemeProvider";
import { screens } from "../../router/routes";
import { Colors } from "../../styles";
import I18n from "./../../i18n/index";

const size = 120;

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { theme, setTheme } = useTheme();

  const renderIcon = (icon: {
    family: "FontAwesome5" | "MaterialCommunityIcons";
    name: any;
    size: number;
    color: string;
  }) => {
    const { family, name, color, size } = icon;
    switch (family) {
      case "FontAwesome5":
        return <IconBase.FontAwesome5 name={name} size={size} color={color} />;
      case "MaterialCommunityIcons":
        return (
          <IconBase.MaterialCommunityIcons
            name={name}
            size={size}
            color={color}
          />
        );
      default:
        break;
    }
  };

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      marginTop: -4,
    },
    headerContainer: {
      paddingHorizontal: 20,
      paddingVertical: 50,
      backgroundColor: Colors.DarkForest[500],
      alignItems: "center",
    },
    bodyContainer: {
      flex: 1,
      backgroundColor: theme == "light" ? "white" : Colors.DarkForest[300],
    },
    textOption: {
      color: theme == "light" ? Colors.DarkForest[300] : "white",
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        {...props}
      >
        <View style={styles.drawerContent}>
          <View style={styles.headerContainer}>
            {/* <View> */}
            <View
              style={{
                borderWidth: 1,
                borderColor: "white",
                width: size,
                height: size,
                borderRadius: size / 2,
                //backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo size={size * 0.75} />
            </View>
          </View>

          <View style={[styles.bodyContainer]}>
            {/* OPTIONS */}
            <DrawerSection title={"Menu"}>
              {screens.map((screen) => (
                <DrawerItem
                  key={screen.path}
                  //pressColor="#394273"
                  labelStyle={styles.textOption}
                  label={screen.label}
                  onPress={() => props.navigation.jumpTo(screen.path)}
                  icon={({ color, size }) =>
                    renderIcon({
                      family: screen.icon.family,
                      name: screen.icon.name,
                      color:
                        theme === "light" ? Colors.GRAY[600] : Colors.GRAY[300],
                      size: screen.icon.size ?? size,
                    })
                  }
                />
              ))}
            </DrawerSection>

            <DrawerSection title={I18n.t("screens.titles.theme")}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 20,
                }}
              >
                <Text style={styles.textOption}>
                  {theme === "light"
                    ? I18n.t("theme.light")
                    : I18n.t("theme.dark")}
                </Text>
                <Switch
                  color={"white"}
                  value={theme === "light" ? false : true}
                  onValueChange={(v) => setTheme(v ? "dark" : "light")}
                />
              </View>
            </DrawerSection>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

interface DrawerSectionProps {
  title: string;
  children: React.ReactNode;
}

const DrawerSection: React.FC<DrawerSectionProps> = ({
  title,
  children,
}: DrawerSectionProps) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 15,
      borderBottomWidth: 0.6,
      borderBottomColor: Colors.GRAY[300],
    },
    titleContainer: {
      paddingHorizontal: 10,
    },
    title: {
      fontWeight: "bold",
      color: theme == "light" ? Colors.GRAY[600] : Colors.GRAY[200],
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default DrawerContent;
