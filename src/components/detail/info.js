import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Info extends React.Component {
    render() {
        const { nav, route } = this.props;
        const { name, price, source, char, longevity, old, gentle, img } = route.params;
        return (
            <View style={styles.contact} >
                <Text style={{ fontSize: 15 }}>Shop Pet xin chào quý khách, để biết thêm thông tin về thú cưng quý khách có thể liên lạc qua số điện thoại: <Text style={{ color: 'red', fontSize: 15 }}>0969442510</Text></Text>
                <View style={styles.name}>
                    <Text style={styles.textName}>{name}</Text>
                </View>
                <View style={styles.cart}>
                    <Text style={styles.price}>Giá: {price} VNĐ</Text>
                    <TouchableOpacity style={styles.buy} onPress={() => nav.navigate('Pay', {
                        name: name,
                        price: price,
                        img: img,
                        char: char,
                    })}>
                        <Icon name='shoppingcart' style={styles.iconCart} size={20} />
                        <Text style={styles.textCart}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Nguồn gốc</Text>
                    <Text style={styles.text}>{source}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Giới tính</Text>
                    <Text style={styles.text}>{gentle}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Đặc điểm</Text>
                    <Text style={styles.text}>{char}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Tuổi</Text>
                    <Text style={styles.text}>{old}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}>Tuổi thọ</Text>
                    <Text style={styles.text}>{longevity}</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    contact: {
        margin: 10,
    },
    price: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 5,
        color: '#084B8A',
    },
    name: {
        alignItems: 'center',
    },
    textName: {
        fontSize: 25,
        color: '#084B8A',
        marginBottom: 5,
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buy: {
        flexDirection: 'row',
        marginRight: 20,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#81DAF5',
    },
    textCart: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginRight: 5,
    },
    iconCart: {
        color: '#fff',
        marginTop: 2,
        marginRight: 5,
        marginLeft: 5,
    },
    info: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 10,
        paddingBottom: 4,
        borderBottomWidth: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15,
    }

})