import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import ProductList from "../components/products/productsList";

const Store = () => {
  const PRODUCT_LIST = [
    {
      id: 1,
      name: "Producto 1",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Producto 3",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Producto 4",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Producto 5",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Producto 6",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 7,
      name: "Producto 7",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 8,
      name: "Producto 8",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
    {
      id: 9,
      name: "Producto 9",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      cover: "https://picsum.photos/200/300",
    },
  ];

  return (
    <View>
      <FlatList
        data={PRODUCT_LIST}
        renderItem={({ item }) => <ProductList product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Store;
