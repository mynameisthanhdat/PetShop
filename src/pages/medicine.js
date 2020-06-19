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
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: 7000000,
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
    },
    {
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: 7000000,
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
    },
    {
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: 7000000,
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
    },
    {
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: 7000000,
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
    },
    {
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: 7000000,
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaleMedicine',
                {
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    benefit: item.benefit,
                    ingredient: item.ingredient,
                    note: item.note,
                    ban: item.ban,
                    protect: item.protect,
                    tutorial: item.tutorial,
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
