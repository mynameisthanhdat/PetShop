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
        name: 'Bayer - Thuốc tẩy giun sán cho mèo (dạng viên)',
        img: 'https://www.petcity.vn/media/product/250_4242_2.jpg',
        price: '50.000',
        benefit: 'Để kiểm soát tất cả giun đường tiêu hóa bao gồm cả sán dây, giun đũa, giun móc,... trên mèo.',
        ingredient: 'Một viên Drontal® AllWormer for Cats chứa: Pyrantel embonate 230 mg. Praziquantel 20 mg',
        note: '',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: '1 viên thuốc cho 4 kg thể trọng mèo. Drontal chỉ cho uống 1 liều đơn.'
    },
    {
        name: 'Virbac Endogard 10 - Thuốc trị giun',
        img: 'https://www.petcity.vn/media/product/250_692_thuoc_so_giun_virbac_e1552116045544.jpg',
        price: '65.000',
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Febantel là thuốc trừ giun sán được dùng qua đường miệng cho gia súc để điều trị và kiểm soát các ký sinh vật đường ruột. Pyrantel gây ra sự tê liệt khả năng di động kéo dài của giun ký sinh và dẫn đến sự trục xuất chúng ra khỏi vật chủ. Praziquantel có tác dụng chống lại nhiều loài sán dây và sán lá. Ivermectin gây tê liệt ở giun tròn và các động vật chân đốt dẫn đến tiêu diệt chúng.',
        note: '',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: '1 viên Endogard 10 dùng cho 10kg cân nặng. Có thể dùng riêng hoặc dùng chung với thức ăn. Chó con có thể dùng Endogard 10 để xổ lãi bắt đầu từ 2 tháng tuổi và dùng định kỳ hàng tháng. Để điều trị nguyên sinh động vật cần dùng 1 liều Endogard 10 theo cân nặng và mỗi 24 giờ trong vòng 3 ngày.'
    },
    {
        name: 'Sữa tắm chó mèo phòng trị viêm da SKIN CARE Shampoo',
        img: 'http://www.vemedim.com/images/Skin-care.png',
        price: '70.000',
        benefit: 'Phòng trị các bệnh xảy ra thường xuyên trên da lông như: nấm da, viêm nang lông, viêm da có mủ, ... gây ngứa ngáy, hôi lông, rụng lông, gãy lông, da sần sùi, bong tróc.Sử dụng thường xuyên 2 lần/ tuần giúp giảm ngứa, khử mùi hôi trên da lông giúp cho thú luôn có một bộ lông sạch sẽ và siêu mượt.',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Làm ướt toàn bộ lông vật nuôi, xát đều sữa tắm từ đầu đến chân để tạo bọt, để yên trong 5- 10 phút, sau đó xả thật sạch bằng nước thường. Sử dụng sữa tắm 3 lần/tuần trong vòng 2-3 tuần. Lượng sữa tắm được cung cấp tùy theo kích cỡ của thú và chiều dài của  lông. '
    },
    {
        name: 'Frontline Plus - Xịt trị ve rận trên chó mèo - 100ml',
        img: 'https://www.petcity.vn/media/product/250_322_1_frontline_spray_100ml.jpg',
        price: 7000000,
        benefit: 'Frontline Spray là thuốc chuyên dùng để diệt ngoại kí sinh trùng (ve, bọ chét) trên cơ thể chó, mèo. Liều dùng: Để xịt ướt bộ lông thú cho đến da (tùy thuộc vào độ dài của lông thú), xịt từ 6-12 lần xịt / kg thể trọng',
        ingredient: 'Trong 1ml có chứa: Chlorhexidine digluconate 31,2 mg - Dung môi vừa đủ 1 ml',
        note: 'Trên chó: thuốc có tác dụng trên ve trong 4 tuần, trên bọ chét trong 2 tháng (từ 1-3 tháng tùy thuộc vào mức độ kí sinh trùng trong môi trường). Trên mèo: thuốc có tác dụng trên bọ chét trong 6 tuần',
        ban: 'Tránh xịt vào mắt. Mang găng tay khi xịt thuốc cho thú. Xịt cho thú ở nơi khô thoáng. Rửa tay sạch sau khi xịt thuốc',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp , nhiệt độ không quá 30oC.',
        tutorial: 'Xịt toàn bộ cơ thể thú và giữ bình xịt cách thú từ 10-20cm. Vuốt ngược lông thú từ sau ra trước để lông thú đứng và đảm bảo xịt ướt toàn bộ cơ thể thú. Đặc biệt đối với thú có bộ lông dài, cần vuốt gợn sóng bộ lông thú để thuốc ngấm tới da. Kế đó để da thú khô tự nhiên , Không lau khô'
    },
    {
        name: 'Dung dịch Tropiclean chăm sóc răng miệng và hỗ trợ xương khớp cho thú cưng',
        img: 'https://www.petcity.vn/media/product/250_4120_h_j_wa_16oz_mock_large.jpg',
        price: '295.000',
        benefit: 'Ngăn ngừa hình thành mảng bám, cao răng ố vàng. Giúp hơi thở cún cưng luôn thơm mát. Tăng cường hệ xương khớp và cơ bắp cho thú cưng. Hỗ trợ điều trị một số bệnh về răng nướu.',
        ingredient: 'Glucosamine, nước tinh khiết, glycerin đậu nành & hạt cải, rượu ngô, trà xanh, bạc hà khoáng chất & dinh dưỡng tự nhiên',
        note: 'Thoa kỹ sữa tắm vào các vùng da lông quanh mõm , dưới tai, giữa các móng để phòng trị bệnh ngoài da. Tránh để sữa tắm dính vào mắt, lọt vào trong tai',
        ban: 'Không dùng cho chó, mèo dưới 2 tháng tuổi.  Tránh vuốt ve ôm ấp thú cưng sau khi cho thú sử dụng thuốc. Chỉ sử dụng thuốc nhỏ ngoài da thú cưng, không dùng bằng đường uống hay tiêm.',
        protect: 'Nơi khô mát, tránh ánh sáng chiếu trực tiếp, nhiệt độ không quá 30oC và Tránh xa tầm tay trẻ em',
        tutorial: 'Hòa 1 nắp đầy dung dịch sản phẩm vào nửa lít nước uống của thú cưng mỗi khi bạn thay nước mới.'
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