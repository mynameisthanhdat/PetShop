import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

class Sale extends React.Component {
    render() {
        const { route } = this.props;
        const { name, price, img } = route.params;
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image source={{ uri: img }} style={styles.img} />
                    <View style={styles.namePrice}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>{(price * 0.7).toFixed(0)} VNĐ</Text>
                        <Text style={styles.priceUnder}>{price} VNĐ</Text>
                    </View>
                </View>
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
})
