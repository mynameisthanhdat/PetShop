import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import InputSpinner from "react-native-input-spinner";

const Info = ({ naviagtion }) => {
    const { source, char, longevity, old, price, img } = this.props.route.params;
    return (
        <View style={styles.contact} >
            <Text style={{ fontSize: 15 }}>Shop Pet xin chào quý khách, để biết thêm thông tin về thú cưng quý khách có thể liên lạc qua số điện thoại: <Text style={{ color: 'red', fontSize: 15 }}>0969442510</Text></Text>
            <View style={styles.addToCart}>
                {/* <InputSpinner
                        max={10}
                        min={2}
                        step={2}
                        colorMax={"#f04048"}
                        colorMin={"#40c5f4"}
                        value={this.state.number}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    /> */}
                <Text>{naviagtion.getParam('price')}</Text>
            </View>
        </View>
    )
}
export default Info;

const styles = StyleSheet.create({
    contact: {
        margin: 10,
    }
})