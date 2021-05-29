import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent/DrawerContent";
import { screens } from "./routes";
import { Colors } from "../styles";
import { useTheme } from "../context/ThemeProvider";

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: theme === "light" ? Colors.BLACK : Colors.WHITE,
          headerStyle: {
            backgroundColor:
              theme === "light" ? Colors.WHITE : Colors.DarkForest[500],
          },
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
