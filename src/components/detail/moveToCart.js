import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cart from '../../pages/cart';

const moveToCart = ({ naviagtion }) => {
    return (
        <TouchableOpacity style={styles.cart} onPress={() => naviagtion.navigate('Cart')}>
            <Text style={styles.textCart}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
    )
}
export default moveToCart;

const styles = StyleSheet.create({
    cart: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        marginRight: 20,
        marginTop: 3
    },
    textCart: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    }
})