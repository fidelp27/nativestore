import React from "react";
import { View, FlatList } from "react-native";
import ProductList from "../products/productsList";

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
