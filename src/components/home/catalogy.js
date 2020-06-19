import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Catalogy extends React.Component {
    render() {
        const { nav } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.catalogy}>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Dogs')}>
                        <Image source={require('../../images/corgi.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Chó</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Cats')}>
                        <Image source={require('../../images/meo.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Mèo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Medicine')}>
                        <Image source={require('../../images/medicine.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Thuốc</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.catalogy}>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Food')}>
                        <Image source={require('../../images/petfood.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Thức ăn</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Stuff')}>
                        <Image source={require('../../images/stuff.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Đồ dùng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choose} onPress={() => nav.navigate('Another')}>
                        <Image source={require('../../images/other.jpg')} style={styles.img} />
                        <View style={styles.name}>
                            <Text style={{ fontSize: 15, fontWeight: '700' }}>Khác</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    choose: {
        shadowRadius: 10,
        shadowOffset: { width: 15, height: 15 },
        shadowColor: '#222',
        shadowOpacity: 0.3,
        elevation: 45,
        marginBottom: 15,
        marginLeft: '7%',
        marginRight: '6%',
        borderRadius: 10,
        height: Dimensions.get('window').width * 0.25, // approximate a square
        width: Dimensions.get('window').width * 0.2,
    },
    catalogy: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        alignItems: 'center',
    },
    img: {
        height: Dimensions.get('window').width * 0.2, // approximate a square
        width: Dimensions.get('window').width * 0.2,
        borderRadius: 10
    },
    text: {
        fontWeight: '700',
        fontSize: 18,
    }
});