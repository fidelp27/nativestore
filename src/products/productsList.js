import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const ProductList = ({ product }) => {
  const styles = StyleSheet.create({
    containerCard: {
      flexDirection: "row",
      width: "90%",
      marginVertical: 15,
    },
    containerInfo: {
      flexDirection: "column",
      width: "70%",
    },
    image: {
      width: 70,
      height: 80,
      marginHorizontal: 10,
      resizeMode: "cover",
    },
    icon: {
      fontSize: 20,
      borderColor: "black",
      marginLeft: "auto",
    },
  });

  return (
    <View style={styles.containerCard}>
      <Image source={{ uri: product.cover }} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text>{product.name}</Text>
        <Text>{product.description} </Text>
      </View>
      <View>
        <TouchableOpacity onpress={() => console.log("added")}>
          <Text>
            <AntDesign name="pluscircleo" size={20} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductList;
