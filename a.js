import * as React from 'react';
import { Button, View, TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Home from './src/pages/home';
import Pets from './src/pages/pets';
import Medicine from './src/pages/medicine';
import History from './src/pages/history';

import Header from './src/components/header/header'


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Header />
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Pets" component={Pets} />
                <Drawer.Screen name="Medicine" component={Medicine} />
                <Drawer.Screen name="History" component={History} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}