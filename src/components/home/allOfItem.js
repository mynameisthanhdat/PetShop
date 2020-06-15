import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

const AllOfItem = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.cardContainer}>
                <View style={styles.cardTop}>
                    <Image
                        style={styles.image}
                        source={require('../../images/clothing.png')}
                    />
                </View>
                <Text style={styles.cartTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AllOfItem;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },

    container: {
        width: '25%',
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },

    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardTop: {
        shadowRadius: 13.97,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#222',
        shadowOpacity: 0.53,
        elevation: 85,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        width: Dimensions.get('screen').width / 5,
    },

    cartTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});
