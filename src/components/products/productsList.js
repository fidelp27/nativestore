import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const ProductList = ({ product, onSelected }) => {
  const styles = StyleSheet.create({
    containerCard: {
      flexDirection: "row",
      width: "90%",
      marginVertical: 15,
    },
    styleTouchable: {
      flex: 1,
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
      borderRadius: 10,
    },
    icon: {
      fontSize: 20,
      borderColor: "black",
      marginLeft: "auto",
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.containerCard}>
        <TouchableOpacity
          onPress={() => onSelected(product)}
          style={styles.styleTouchable}
        >
          <Image source={{ uri: product.cover }} style={styles.image} />
          <View style={styles.containerInfo}>
            <Text>{product.name}</Text>
            <Text>{product.description} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ProductList;
