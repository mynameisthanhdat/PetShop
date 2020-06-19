import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
const data = [
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187', benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Puppy 3kg',
        price: 205000,
        img: 'https://www.petcity.vn/media/lib/1444_SmartheartPuppy.jpg',
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
        img: 'https://vietpetmart.com/upload/sanpham/1840db1b2cd7cc8995c6-0514.jpg',
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
        name: 'Pate vị bò và gan cho chó 400g (dạng lon)',
        price: 135000,
        img: 'https://www.petcity.vn/media/product/250_2174_pate_smartheart_lon_v____g___t__y_cho_ch___400gr.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn dinh dưỡng cho chó to vị bò nướng (1.5kg)',
        price: 98000,
        img: 'https://yolo.vn/wp-content/uploads/2019/07/hinh-anh-thuc-an-royal-canin-poodle-puppy-cho-poodle-con-1.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://www.vietpet.net/wp-content/uploads/2019/12/thuc-an-cho-cho-con-classic-pets-milk-flavour.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://bizweb.dktcdn.net/100/346/633/products/1-a9351970-df75-4706-bb64-a1571249e671.jpg?v=1553844345187', benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Puppy 3kg',
        price: 205000,
        img: 'https://www.petcity.vn/media/lib/1444_SmartheartPuppy.jpg',
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
        img: 'https://vietpetmart.com/upload/sanpham/1840db1b2cd7cc8995c6-0514.jpg',
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
        name: 'Pate vị bò và gan cho chó 400g (dạng lon)',
        price: 135000,
        img: 'https://www.petcity.vn/media/product/250_2174_pate_smartheart_lon_v____g___t__y_cho_ch___400gr.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn dinh dưỡng cho chó to vị bò nướng (1.5kg)',
        price: 98000,
        img: 'https://yolo.vn/wp-content/uploads/2019/07/hinh-anh-thuc-an-royal-canin-poodle-puppy-cho-poodle-con-1.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
    {
        name: 'Thức ăn khô',
        price: 135000,
        img: 'https://www.vietpet.net/wp-content/uploads/2019/12/thuc-an-cho-cho-con-classic-pets-milk-flavour.jpg',
        benefit: 'Không chứa gluten gây kích thích đường ruột ở chó. Thức ăn vị thịt bò kích thích chó ăn ngon miệng, phù hợp khẩu vị của chó Thức ăn cho chó MOSHM được chế biến riêng theo nhu cầu dinh dưỡng của chó cỡ nhỏ Giúp giảm nguy cơ mắc bệnh béo phì, giữ lông luôn bóng mượt, bảo vệ mắt Giảm mùi hôi miệng và giúp răng luôn chắc khỏe Không gây kích ứng đường ruột ở chó',
        ingredient: 'Thức ăn cho chó cỡ nhỏ MOSHM Mini Indoor Grain Free Nutrition gồm các thành phần: 65% thịt: bò, gà, vịt, dê, ngỗng, thỏ, nai, cá ngừ, cá hồi, cá tráp, cá thu ngừ, cá trắm đen 35% rau củ: đậu tương, sắn, khoai lang,khoai tây, táo, cà rốt, nấm, đường fructose, dầu hạt lanh, bột trứng, tảo biển 0% gluten từ gạo, bột mì… Thành phần chứa 65% thịt và cá thật, kết hợp rau củ quả hoàn toàn từ thiên nhiên. Thức ăn cho chó MOSHM không chứa chất bảo quản, phẩm màu, hương liệu và phụ gia thực phẩm độc hại',
    },
]
const numColumns = 2;

export default class SaleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        };
    }

    renderItem = (item, navigation) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sale',
                {
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    benefit: item.benefit,
                    ingredient: item.ingredient
                }
            )} >
                <View style={styles.item}>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={{ uri: item.img }} />
                    </View>
                    <View style={styles.nameInfo}>
                        <View>
                            <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                        </View>
                        <View>
                            {/* <Text style={styles.price}>Giá: {item.price} VNĐ</Text> */}
                            <Text style={styles.price}>Giá: {(item.price * 0.85).toFixed(0)} VNĐ</Text>
                        </View>
                        <Text style={styles.priceUnder}>{item.price} VNĐ</Text>

                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Text>Xem ngay!!!</Text>
                            <Icon name="arrow-right-circle" size={20} style={styles.iconVIew} />
                        </View>
                    </View>
                    <View style={styles.saleOff}>
                        <Text style={styles.saleOffText}>-30%</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Icon1 name='grin-hearts' size={20} style={styles.iconLove} />
                        <Text style={styles.button}>Giảm giá</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item, navigation)}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 10,
        backgroundColor: '#F1EEEE'
    },
    item: {
        width: '100%',
        marginTop: 5,
        backgroundColor: '#fff',
        marginLeft: 6,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: Dimensions.get('window').width * 0.73,
        width: Dimensions.get('window').width * 0.48,
    },
    image_container: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
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
        fontWeight: '700'
    },
    price: {
        fontSize: 16,
        color: '#234567'
    },
    priceUnder: {
        textDecorationLine: 'line-through',
        color: '#ABB0B8',
    },
    info: {
        fontSize: 15,
    },
    iconVIew: {
        color: 'red',
        marginLeft: 100,
        position: 'absolute',
    },
    btn: {
        width: '100%',
        padding: 10,
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderColor: '#FA58D0',
        backgroundColor: '#FA58D0',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    iconLove: {
        color: '#fff',
        marginRight: 5,
    },
    saleOff: {
        position: 'absolute',
        backgroundColor: '#E4828B',
        paddingHorizontal: 8,
        paddingVertical: 1,
        top: 0,
        left: 0
    },
});
