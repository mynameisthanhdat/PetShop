import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardDeal = ({ type, price }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                    source={require('../../images/clothing.png')}
                    style={styles.image}
                />
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>{type}</Text>
                    <Text style={styles.bodyPrice}>
                        {price} <Text style={styles.bodyPriceOri}>$19</Text>
                    </Text>
                    <Text style={styles.bodyTime}>Ends in 05:21:46</Text>
                </View>
                <View style={styles.saleOff}>
                    <Text style={styles.saleOffText}>-30%</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardDeal;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        shadowRadius: 13.97,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#222',
        shadowOpacity: 0.53,
        elevation: 100,
        borderRadius: 8,
        padding: 15,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
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
