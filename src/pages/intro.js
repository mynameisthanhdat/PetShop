import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderBar from '../components/header/headerBar';


export default class Intro extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <HeaderBar nav={navigation} />
                <View style={styles.info}>
                    <Text style={styles.text}>Giới thiệu</Text>
                    <Text style={styles.benefit}>
                        Đây là ứng dụng mua bán thú cưng, thuốc chưa bệnh, vật dụng và đồ dùng của thú với thông tin về sản phẩm rõ ràng
                        Khách hàng có thể đặt hàng và nhập tên người đặt hàng, địa chỉ và số điện thoại, cửa hàng sẽ liên lạc và giao hàng cho người mua thông qua việc vận chuyển.
                        </Text>
                    <Text style={styles.text}>Liên lạc</Text>
                    <Text style={styles.benefit}>Số điện thoại liên lạc: 0969442510</Text>
                    <Text style={styles.benefit}>Email: mynameisthanhdat@gmail.com</Text>
                    <Text style={styles.text}>Góp ý</Text>
                    <Text style={styles.benefit}>Mọi ý kiến góp ý vui lòng liên hệ qua hòm thư: mynameisthanhdat@gmail.com</Text>
                    <Text style={styles.thanks}>PetShop xin chân thành cảm ơn!</Text>
                </View>
                <View style={styles.nocopy}>
                    <Icon name='copyright' size={14} style={styles.iconCopy} />
                    <Text style={{ color: '#ABB0B8', fontSize: 14 }}>NoCopyright</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EEEE'
    },
    info: {
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
    },
    thanks: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 5,
        color: '#DF013A'
    },
    nocopy: {
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: 20,
        position: 'absolute'
    },
    iconCopy: {
        marginTop: 3,
        marginRight: 2,
        color: '#ABB0B8',
    }
});
