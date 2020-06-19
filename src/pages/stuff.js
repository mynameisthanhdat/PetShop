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
        name: 'Dây dắt cho chó 1.2x100 (cm)',
        img: 'https://www.petcity.vn/media/product/250_4182_up_pet.png',
        price: '178.000',
        trademark: 'CTC Bio (Korea)',
        code: 'PETCTC15640165'
    },
    {
        name: 'Vòng cổ chuông hoa 1.5cm',
        img: 'https://www.petcity.vn/media/product/250_2432_',
        price: '29.000',
        trademark: '',
        code: 'PETJCC114'
    },
    {
        name: 'CTCBio - Vòng cổ dài',
        img: 'https://www.petcity.vn/media/product/250_4172_',
        price: '79.000',
        trademark: 'CTC Bio (Korea)',
        code: 'PETCTC15640162'
    },
    {
        name: 'CTCBio - Lồng vận chuyển lớn',
        img: 'https://www.petcity.vn/media/product/250_4170_',
        price: '658.000',
        trademark: 'CTC Bio (Korea)',
        code: 'PETCTC15640160'
    },
    {
        name: 'Flexi New Neon - Dây dắt tự động size M',
        img: 'https://www.petcity.vn/media/product/250_3476_flexi_neon_cord.jpg',
        price: '570.000',
        trademark: 'Flexi (Đức)',
        code: 'PETC308483'
    },
    {
        name: 'Áo bí ngô size S',
        img: 'https://www.petcity.vn/media/product/250_3252_ao_ni_bi_ngo_petcity_1.jpg',
        price: '320.000',
        trademark: 'PetStar',
        code: 'PETCH044S'
    },
    {
        name: 'Petstar - Áo công chúa size 1',
        img: 'https://www.petcity.vn/media/product/250_3122_3121_untitleeeeeeeeeeed.jpg',
        price: '210.000',
        trademark: 'CTC Bio (Korea)',
        code: 'PETCH031S'
    },
    {
        name: 'Nệm lông thú ABC size 4',
        img: 'https://www.petcity.vn/media/product/250_4181_aaa.jpg',
        price: '471.000',
        trademark: 'ABC',
        code: 'PETABC27'
    },
    {
        name: 'Balo vận chuyển chó mèo Phi hành gia (da)',
        img: 'https://www.petcity.vn/media/product/250_2578_ba_lo_phi_hanh_gia_da_petcity_3.jpg',
        price: '560.000',
        trademark: 'Petstar',
        code: 'PETMYB2'
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaleStuff',
                {
                    name: item.name,
                    img: item.img,
                    price: item.price,
                    trademark: item.trademark,
                    code: item.code
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
        backgroundColor: '#F1EEEE',
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
