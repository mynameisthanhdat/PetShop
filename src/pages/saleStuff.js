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
import Header from '../components/header/header';

class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }
    render() {
        const { route, navigation } = this.props;
        const { name, price, img, code, trademark } = route.params;
        return (
            <View style={{ marginBottom: 20 }}>
                <Header nav={navigation} />
                <ScrollView style={styles.container}>
                    <View >
                        <View style={styles.info}>
                            <Image source={{ uri: img }} style={styles.img} />
                            <View style={styles.namePrice}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.price}>Giá: {price} VNĐ</Text>
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
                            <Text style={styles.text}>Thương hiệu</Text>
                            <Text style={styles.benefit}>{trademark}</Text>
                            <Text style={styles.text}>Mã sản phẩm</Text>
                            <Text style={styles.benefit}>{code}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Sale;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        marginBottom: 20
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
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.48,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#084B8A',
        marginRight: '5%',
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
