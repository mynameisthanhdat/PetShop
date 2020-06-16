import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Pets from './src/pages/pets';
import Medicine from './src/pages/medicine';
import History from './src/pages/history';
import Header from './src/components/header/header';
import Dogs from './src/pages/dogs';
import Detail from './src/pages/detail';
import Cart from './src/pages/cart';
import Sale from './src/pages/sale';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Dogs" component={Dogs} />
    <HomeStack.Screen name="Detail" component={Detail} />
    <HomeStack.Screen name="Cart" component={Cart} />
    <HomeStack.Screen name="Sale" component={Sale} />
  </HomeStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Pets" component={Pets} />
        <Drawer.Screen name="Medicine" component={Medicine} />
        <Drawer.Screen name="History" component={History} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;