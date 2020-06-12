import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

const Detail = () => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Detail page</Text>
        </TouchableOpacity>
    )
}
export default Detail;

