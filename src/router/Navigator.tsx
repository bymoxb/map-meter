import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AreaScreen from "../screens/AreaScreen";
import DistanceScreen from "../screens/DistanceScreen";

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="AreaScreen"
      >
        <Drawer.Screen name="AreaScreen" component={AreaScreen} />
        <Drawer.Screen name="DistanceScreen" component={DistanceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
