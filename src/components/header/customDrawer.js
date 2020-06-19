import * as React from 'react';
import { View, Text } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default class DrawerContent extends React.Component {
    render() {
        return (
            <View>
                <Text>PET SHOT</Text>
            </View>
        );
    }
}