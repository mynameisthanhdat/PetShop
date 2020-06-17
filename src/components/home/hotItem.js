import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const data = [
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187', benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://lh3.googleusercontent.com/proxy/AP9rnALq81BQJ5lNe4XddH8VlHBlchbA9ZjkIx_uMNlxOCJhkyyiriJlbpoX4_IjrxqYqDwf54k9DKxTdgtkmth-ot-ljHDQFxJSAA',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
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
                img: item.img,
                benefit: item.benefit,
                ingredient: item.ingredient
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
