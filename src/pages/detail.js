import React from 'react';
import {
    View,
} from 'react-native';
import Slide from '../components/detail/slide';
import Info from '../components/detail/info';
import Header from '../components/header/header';
const Detail = ({ navigation, route }) => {

    return (
        <View>
            <Header nav={navigation} />
            <Slide route={route} />
            <Info nav={navigation} route={route} />
        </View>
    )
}
export default Detail;

