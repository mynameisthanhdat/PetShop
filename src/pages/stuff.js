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
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import HeaderBar from '../components/header/headerBar';

const data = [
    {
        name: 'Mèo Anh lông ngắn',
        img: 'https://thegioiloaimeo.com/wp-content/uploads/2019/12/meo-anh-long-ngan2.jpg',
        gentle: 'Đực',
        source: 'Việt Nam',
        char: 'Lông ngăn - xám, mắt nâu',
        longevity: 'Lên đến tới 16 năm',
        old: '4 tháng',
        price: 7000000,
    },
    {
        name: 'Mèo Anh lông dài',
        img: 'https://dogily.vn/wp-content/uploads/2020/03/meo-anh-long-dai-de-thuong.jpg',
        gentle: 'Cái',
        source: 'Việt Nam',
        char: 'Lông dài - trắng, mắt xanh',
        longevity: 'Lên đến tới 16 năm',
        old: '4 tháng',
        price: 7000000,
    },
    {
        name: 'Mèo Ba Tư',
        img: 'https://lolipet.net/wp-content/uploads/exoticshorthair3.png',
        gentle: 'Đực',
        source: 'Việt Nam',
        char: 'Lông dày - đen trắng, mặt ngắn',
        longevity: 'Lên đến tới 16 năm',
        old: '4 tháng',
        price: 7000000,
    },
    {
        name: 'Mèo Turkish Angora Thổ Nhĩ Kỳ',
        img: 'https://vuongquocloaivat.com/wp-content/uploads/2018/10/meo-angora.jpg',
        gentle: 'Cái',
        source: 'Việt Nam',
        char: 'Lông dài - trắng, đuôi dài',
        longevity: 'Lên đến tới 16 năm',
        old: '4 tháng',
        price: 7000000,
    },
    {
        name: 'Mèo tai cụp Scottish Fold',
        img: 'https://jandpet.com.vn/wp-content/uploads/2018/07/anh-3.jpeg',
        gentle: 'Đực',
        source: 'Việt Nam',
        char: 'Lông dày - nâu , tai cụp',
        longevity: 'Lên đến tới 16 năm',
        old: '4 tháng',
        price: 7000000,
    },
]
const numColumns = 2;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        };
    }

    renderItem = (item, navigation) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',
                {
                    name: item.name,
                    source: item.source,
                    char: item.char,
                    longevity: item.longevity,
                    price: item.price,
                    old: item.old,
                    img: item.img,
                    gentle: item.gentle
                }
            )} >
                <View style={styles.item}>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={{ uri: item.img }} />
                    </View>
                    <View style={styles.nameInfo}>
                        <View>
                            <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.info}>Giống: {item.gentle}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Xem ngay!!!</Text>
                            <Icon name="arrow-right-circle" size={20} style={styles.iconVIew} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <HeaderBar nav={navigation} />
                {/* <View>
                    <TouchableOpacity style={styles.btn}>
                        <Icon1 name='grin-hearts' size={20} style={styles.iconLove} />
                        <Text style={styles.button}>Yêu thích</Text>
                    </TouchableOpacity>
                </View> */}
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item, navigation)}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EEEE'
    },
    item: {
        marginTop: 5,
        backgroundColor: '#fff',
        marginLeft: 6,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: Dimensions.get('window').width * 0.7,
        width: Dimensions.get('window').width * 0.48,
    },
    image_container: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1
    },
    nameInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 5,
        marginRight: 5
    },
    info: {
        fontSize: 15,
    },
    iconVIew: {
        color: 'red',
        marginLeft: 100,
        position: 'absolute',
    },
    btn: {
        width: '100%',
        padding: 10,
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderColor: '#FA58D0',
        backgroundColor: '#FA58D0',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    iconLove: {
        color: '#fff',
        marginRight: 5,
    },
});
