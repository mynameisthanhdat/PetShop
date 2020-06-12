import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';

const data = [
    {
        name: 'Alaska',
        img: require('../images/alaska.jpg'),
        info: 'something...'
    },
    {
        name: 'Alaska',
        img: require('../images/alaska.jpg'),
        info: 'something...'
    },
    {
        name: 'Alaska',
        img: require('../images/alaska.jpg'),
        info: 'something...'
    },
    {
        name: 'Alaska',
        img: require('../images/alaska.jpg'),
        info: 'something...'
    },
    {
        name: 'Alaska',
        img: require('../images/alaska.jpg'),
        info: 'something...'
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

    _navigateDetail = ({ navigation }) => {
        navigation.push("Detail");
    };

    renderItem({ item, navigation }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail")} >
                <View style={styles.item}>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={item.img} />
                    </View>
                </View>
                <View style={styles.nameInfo}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.info}>{item.info}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <FlatList
                data={this.state.data}
                style={styles.container}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                numColumns={numColumns}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        flexDirection: 'row',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    image_container: {
        width: '47%',
        height: '100%',
        alignItems: 'center'
    },
    image: {
        width: 183,
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
        fontWeight: 'bold'
    },
    info: {
        fontSize: 15,
    }
});