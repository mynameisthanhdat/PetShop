import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }
    render() {
        const { route, navigation } = this.props;
        const { name, price, img, benefit, ingredient, ban, protect, note, tutorial } = route.params;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.info}>
                        <Image source={{ uri: img }} style={styles.img} />
                        <View style={styles.namePrice}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.price}>{(price * 0.7).toFixed(0)} VNĐ</Text>
                            <Text style={styles.priceUnder}>{price} VNĐ</Text>
                        </View>
                    </View>
                    <View style={styles.cart}>
                        <View></View>
                        <TouchableOpacity style={styles.buy} onPress={() => navigation.navigate('Pay', {
                            name: name,
                            price: price,
                            img: img,
                        })}>
                            <Icon name='shoppingcart' style={styles.iconCart} size={20} />
                            <Text style={styles.textCart}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoFood}>
                        <Text style={styles.text}>Lợi ích</Text>
                        <Text style={styles.benefit}>{benefit}</Text>
                        <Text style={styles.text}>Thành phần</Text>
                        <Text style={styles.benefit}>{ingredient}</Text>
                        <Text style={styles.text}>Hướng dẫn sử dụng</Text>
                        <Text style={styles.benefit}>{tutorial}</Text>
                        <Text style={styles.text}>Chú ý</Text>
                        <Text style={styles.benefit}>{note}</Text>
                        <Text style={styles.text}>Chống chỉ định</Text>
                        <Text style={styles.benefit}>{ban}</Text>
                        <Text style={styles.text}>Bảo quản</Text>
                        <Text style={styles.benefit}>{protect}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default Sale;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    info: {
        flexDirection: 'row'
    },
    img: {
        height: Dimensions.get('window').width * 0.6,
        width: Dimensions.get('window').width * 0.48,
    },
    namePrice: {
        alignItems: 'center',
        marginLeft: '5%',
        alignSelf: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
        width: Dimensions.get('window').width * 0.48,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#084B8A',
    },
    priceUnder: {
        textDecorationLine: 'line-through',
        color: '#ABB0B8',
    },
    total: {
        marginTop: 15,
        fontSize: 14,
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputSpinner: {
        marginLeft: '5%'
    },
    buy: {
        flexDirection: 'row',
        marginRight: 20,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#81DAF5',
        alignSelf: 'center',
        padding: 10,
        marginRight: '5%'
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
    infoFood: {
        padding: '5%',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 5,
        color: '#B43104'
    },
    benefit: {
        fontSize: 16,
    }
})
