import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HeaderBar extends React.Component {
    render() {
        const { nav } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => nav.navigate('Home')}>
                    <Icon1 name="pets" size={30} color="#F2F2F2" />
                </TouchableOpacity>
                <Text style={styles.title}>PETSHOP</Text>
                <TouchableOpacity onPress={() => nav.openDrawer()}>
                    <Icon name="menu-unfold" size={30} color="#F2F2F2" />
                </TouchableOpacity>
            </View>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#7cc',
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        // marginLeft: '37%',
        color: '#FE2EF7',
    },
});
