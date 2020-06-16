import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const data = [
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA'
    },
    {
        name: 'Thức ăn khô',
        price: 1350000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA'
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
            <TouchableOpacity onPress={() => nav.navigate('Sale', {
                name: item.name,
                price: item.price,
                img: item.img
            })}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: item.img }}
                        style={styles.image}
                    />
                    <View style={styles.body}>
                        <Text style={styles.bodyTitle}>{item.name}</Text>
                        <Text style={styles.bodyPrice}>
                            {(item.price * 0.7).toFixed(0)} VNĐ
                        </Text>
                        <Text style={styles.bodyTime}>{item.price} VNĐ</Text>
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

    bodyTime: {
        textDecorationLine: 'line-through',
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
