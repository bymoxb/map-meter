import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AreaScreen from '../screens/AreaScreen';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: true }} initialRouteName="AreaScreen">
                <Drawer.Screen name="AreaScreen" component={AreaScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
