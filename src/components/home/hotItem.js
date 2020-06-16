import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const data = [
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
    {
        name: 'Alaska',
        price: 7000000,
        img: require('../../images/alaska.jpg')
    },
]
export default class HotItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }
    renderItem(item, navigation) {
        const { nav } = this.props;
        return (
            <TouchableOpacity onPress={() => nav.navigate('Sale')}>
                <View style={styles.container}>
                    <Image
                        source={item.img}
                        style={styles.image}
                    />
                    <View style={styles.body}>
                        <Text style={styles.bodyTitle}>{item.name}</Text>
                        <Text style={styles.bodyPrice}>
                            {item.price} VNĐ <Text style={styles.bodyPriceOri}></Text>
                        </Text>
                        <Text style={styles.bodyTime}>Ends in 05:21:46</Text>
                    </View>
                    <View style={styles.saleOff}>
                        <Text style={styles.saleOffText}>-30%</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { navigation } = this.props;
        return (
            <FlatList
                data={this.state.data}
                style={styles.container1}
                renderItem={({ item }) => this.renderItem(item, navigation)}
                // numColumns={numColumns}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        )
    }

};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 8,
        padding: 15,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    container1: {
        // backgroundColor: 'gray',
        width: '100%'
    },
    image: {
        width: 70,
        height: 70,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
    },

    bodyTitle: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    bodyPrice: {
        fontWeight: '500',
        color: 'red',
        fontSize: 16,
        marginVertical: 3,
    },

    bodyPriceOri: {
        color: '#222',
        textDecorationLine: 'line-through',
    },

    bodyTime: {
        color: '#ABB0B8',
    },

    saleOff: {
        position: 'absolute',
        backgroundColor: '#E4828B',
        paddingHorizontal: 8,
        paddingVertical: 1,
        top: 8,
    },
    saleOffText: {
        color: '#fff',
    },
});
