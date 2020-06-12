import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const data = [
    'Dogs',
    'Cats',
    'Medecine',
    'Food',
    'Stuff',
    'Other',
];
const listdeal = [
    {
        type: 'Navi coat',
        price: '$9',
    },
    {
        type: 'Whale toy',
        price: '$9',
    },
    {
        type: 'Bear toy',
        price: '$9',
    },
    {
        type: 'Navi coat',
        price: '$9',
    },
    {
        type: 'Whale toy',
        price: '$9',
    },
    {
        type: 'Bear toy',
        price: '$9',
    },
];
import AllOfItem from '../components/home/allOfItem';
import HotItem from '../components/home/hotItem';

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.listcardTop}>
                    <Text style={styles.titleCatalogue}>Catalogue</Text>
                    <View style={styles.listcard}>
                        {data.map(e => {
                            return (
                                <AllOfItem onPress={() => navigation.navigate("Dogs")} title={e} />
                            );
                        })}
                    </View>
                </View>
                <View style={styles.listdeal}>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>Hot</Text>
                        <TouchableOpacity style={styles.chevron}>
                            <Text style={styles.seemore}>See more</Text>
                            <Icon name="chevron-thin-right" size={18} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {listdeal.map(e => {
                            return <HotItem {...e} />;
                        })}
                    </View>
                </View>
                <View style={{ marginTop: 30 }}></View>
            </ScrollView>
        </SafeAreaView>
    )

}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listcardTop: {
        backgroundColor: '#fff',
    },
    listcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '5%'
        // justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 2,
    },
    listdeal: {
        width: '90%',
        marginLeft: '5%'
    },
    titleCatalogue: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 16,
        marginLeft: 20,
    },
    seemore: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'gray',
        marginRight: 7,
    },
    chevron: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titlecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
});    
