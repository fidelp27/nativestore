import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const styles = StyleSheet.create({
    image: {
      width: 70,
      height: 80,
      marginHorizontal: 10,
      resizeMode: "cover",
      borderRadius: 10,
    },
  });
  const product = useSelector((state) => state.product.selected);
  return (
    <View>
      <Image source={{ uri: product.cover }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
    </View>
  );
};

export default ProductDetail;
