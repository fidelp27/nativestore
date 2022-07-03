import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import ProductList from "../components/products/productsList";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../../store/actions/productActions";

const StoreShop = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("productDetail", {
      name: item.name,
    });
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductList product={item} onSelected={onSelected} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default StoreShop;
