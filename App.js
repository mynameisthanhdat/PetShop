import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './src/components/header/customDrawer';
import Home from './src/pages/home';
import Pets from './src/pages/pets';
import Medicine from './src/pages/medicine';
import History from './src/pages/history';
import Header from './src/components/header/header';
import Dogs from './src/pages/dogs';
import Cats from './src/pages/cats';
import Medicine1 from './src/pages/medicine';
import Food from './src/pages/food';
import Stuff from './src/pages/stuff';
import Another from './src/pages/another';
import Detail from './src/pages/detail';
import SaleItem from './src/pages/saleItem';
import Sale from './src/pages/sale';
import Pay from './src/pages/pay';
import SaleMedicine from './src/pages/saleMedicine';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Dogs" component={Dogs} />
    <HomeStack.Screen name="Cats" component={Cats} />
    <HomeStack.Screen name="Medicine1" component={Medicine1} />
    <HomeStack.Screen name="Food" component={Food} />
    <HomeStack.Screen name="Stuff" component={Stuff} />
    <HomeStack.Screen name="Another" component={Another} />
    <HomeStack.Screen name="Detail" component={Detail} />
    <HomeStack.Screen name="Sale" component={Sale} />
    <HomeStack.Screen name="SaleItem" component={SaleItem} />
    <HomeStack.Screen name="Pay" component={Pay} />
    <HomeStack.Screen name="SaleMedicine" component={SaleMedicine} />
  </HomeStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Drawer.Navigator initialRouteName="Home"
        drawerPosition='right'
        drawerContentOptions={{
          activeTintColor: '#7cc',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackScreen}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Pets" component={Pets}
          options={{
            title: 'Pets',
            drawerIcon: ({ focused, size }) => (
              <Icon1
                name="pets"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Medicine" component={Medicine}
          options={{
            title: 'Medicine',
            drawerIcon: ({ focused, size }) => (
              <Icon2
                name="nursing-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        {/* <Drawer.Screen name="History" component={History} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;