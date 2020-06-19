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
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderBar from '../components/header/headerBar';
import HotItem from '../components/home/hotItem';
import Catalogy from '../components/home/catalogy';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar nav={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.listcardTop}>
                    <View style={styles.menu}>
                        <Text style={styles.titleCatalogue}>Danh mục</Text>
                        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="menu-unfold" size={25} style={styles.iconMenu} />
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.listcard}>
                        <Catalogy nav={navigation} />
                    </View>
                </View>
                <View style={styles.listdeal}>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>Hot</Text>
                        <TouchableOpacity style={styles.chevron} onPress={() => navigation.navigate('SaleItem')}>
                            <Text style={styles.seemore}>Nhiều hơn</Text>
                            <Icon name="right" size={14} style={styles.iconRight} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <HotItem nav={navigation} />
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
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconMenu: {
        margin: 10,
    },
    listcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '5%'
        // justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 2,
    },
    listdeal: {
        width: '90%',
        marginLeft: '5%'
    },
    titleCatalogue: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5,
        marginLeft: 20,
        marginTop: 5,
    },
    seemore: {
        fontWeight: '700',
        fontSize: 16,
        color: '#81DAF5',
        marginRight: 2,
    },
    iconRight: {
        color: '#81DAF5',
        marginTop: 2,
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
