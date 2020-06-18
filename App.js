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
import Cats from './src/pages/cats';
import Detail from './src/pages/detail';
import SaleItem from './src/pages/saleItem';
import Sale from './src/pages/sale';
import Pay from './src/pages/pay';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Dogs" component={Dogs} />
    <HomeStack.Screen name="Cats" component={Cats} />
    <HomeStack.Screen name="Detail" component={Detail} />
    <HomeStack.Screen name="Sale" component={Sale} />
    <HomeStack.Screen name="SaleItem" component={SaleItem} />
    <HomeStack.Screen name="Pay" component={Pay} />
  </HomeStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Drawer.Navigator initialRouteName="Home" drawerPosition='right'>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Pets" component={Pets} />
        <Drawer.Screen name="Medicine" component={Medicine} />
        <Drawer.Screen name="History" component={History} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;