import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Pets from './src/pages/pets';
import Intro from './src/pages/intro';
import Dogs from './src/pages/dogs';
import Cats from './src/pages/cats';
import Food from './src/pages/food';
import Stuff from './src/pages/stuff';
import Medicine from './src/pages/medicine';
import Detail from './src/pages/detail';
import SaleItem from './src/pages/saleItem';
import Sale from './src/pages/sale';
import Pay from './src/pages/pay';
import SaleMedicine from './src/pages/saleMedicine';
import SaleFood from './src/pages/saleFood';
import SaleStuff from './src/pages/saleStuff';
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
    <HomeStack.Screen name="Food" component={Food} />
    <HomeStack.Screen name="Stuff" component={Stuff} />
    <HomeStack.Screen name="Medicine" component={Medicine} />
    <HomeStack.Screen name="Detail" component={Detail} />
    <HomeStack.Screen name="Sale" component={Sale} />
    <HomeStack.Screen name="SaleItem" component={SaleItem} />
    <HomeStack.Screen name="Pay" component={Pay} />
    <HomeStack.Screen name="SaleMedicine" component={SaleMedicine} />
    <HomeStack.Screen name="SaleFood" component={SaleFood} />
    <HomeStack.Screen name="SaleStuff" component={SaleStuff} />
  </HomeStack.Navigator>
);

const PetStack = createStackNavigator();
const PetStackScreen = () => (
  <PetStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <PetStack.Screen name="Pets" component={Pets} />
    <PetStack.Screen name="Detail" component={Detail} />
    <PetStack.Screen name="Pay" component={Pay} />
  </PetStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <Drawer.Navigator initialRouteName="Trang chủ"
        drawerPosition='right'
        drawerContentOptions={{
          activeTintColor: '#7cc',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen name="Trang chủ" component={HomeStackScreen}
          options={{
            title: 'Trang chủ',
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Thú cưng" component={PetStackScreen}
          options={{
            title: 'Thú cưng',
            drawerIcon: ({ focused, size }) => (
              <Icon1
                name="pets"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Giới thiệu" component={Intro}
          options={{
            title: 'Giới thiệu',
            drawerIcon: ({ focused, size }) => (
              <Icon2
                name="bookmarks"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;