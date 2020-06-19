import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ClippingRectangle
} from 'react-native';
import InputSpinner from "react-native-input-spinner";
import { TextInput } from 'react-native-gesture-handler';
import Textarea from 'react-native-textarea';
import Header from '../components/header/header';
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }
    render() {
        const { route, navigation } = this.props;
        const { name, price, img, char } = route.params;
        return (
            <ScrollView>
                <Header nav={navigation} />
                <View style={styles.container}>
                    <View style={styles.imgInfo}>
                        <Image source={{ uri: img }} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.name}>{char}</Text>
                            <InputSpinner
                                max={10}
                                min={0}
                                step={1}
                                colorMax={"#f04048"}
                                colorMin={"#40c5f4"}
                                showBorder={true}
                                rounded={false}
                                value={this.state.number}
                                onChange={(num) => {
                                }}
                                style={styles.inputSpinner}
                            />
                            <Text style={styles.total}>Tổng tiền: <Text style={styles.price}>{price} VNĐ</Text></Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <Text style={styles.text}>Thông tin người mua</Text>
                        <TextInput placeholder='Nhập tên...' style={styles.input} />
                        <TextInput placeholder='Nhập số điện thoại...' style={styles.input} />
                        <Textarea
                            style={styles.textarea}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={this.onChange}
                            defaultValue={this.state.text}
                            placeholder={'Nhập địa chỉ...'}
                            underlineColorAndroid={'transparent'}
                        />
                        <Textarea
                            style={styles.textarea1}
                            onChangeText={this.onChange}
                            multiline={true}
                            numberOfLines={4}
                            defaultValue={this.state.text}
                            placeholder={'Ghi chú...'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>MUA NGAY</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
export default Pay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flex: 1
    },
    img: {
        height: Dimensions.get('window').width * 0.48,
        width: Dimensions.get('window').width * 0.4,
    },
    info: {
        height: Dimensions.get('window').width * 0.48,
        width: Dimensions.get('window').width * 0.58,
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
    },
    inputSpinner: {
        marginTop: 10
    },
    total: {
        fontSize: 18,
        marginTop: 10,
    },
    price: {
        color: '#234567',
        fontWeight: '700'
    },
    person: {
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: '#5F04B4',
        marginBottom: 10,
    },
    input: {
        borderWidth: 0.7,
        marginBottom: 10,
        fontSize: 16,
    },
    textarea: {
        borderWidth: 0.7,
        height: 100,
        marginBottom: 10,
        fontSize: 16,
        textAlignVertical: 'top'
    },
    textarea1: {
        borderWidth: 0.7,
        height: 100,
        marginBottom: 10,
        marginTop: -57,
        fontSize: 16,
        textAlignVertical: 'top'
    },
    btn: {
        padding: 15,
        backgroundColor: '#234567',
        marginTop: -120,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    textBtn: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#fff'
    },
})

