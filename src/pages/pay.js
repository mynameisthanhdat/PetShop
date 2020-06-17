import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


const Pay = ({ navigation }) => {
    const { nav, route } = this.props;
    const { name, price, img } = route.params;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
export default Pay;

