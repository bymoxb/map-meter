import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import { useTheme } from "../context/ThemeProvider";
import { Colors } from "../styles";
import { screens } from "./routes";

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        theme === "light" ? Colors.WHITE : Colors.DarkForest[500],
    },
  });

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={styles.container.backgroundColor}
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />

      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: theme === "light" ? Colors.BLACK : Colors.WHITE,
          headerStyle: styles.container,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        {screens.map((screen) => (
          <Drawer.Screen
            key={screen.path}
            name={screen.path}
            component={screen.component}
            options={{ title: screen.label }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
