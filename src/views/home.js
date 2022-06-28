import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      height: "90%",
      width: "100%",
      justifyContent: "center",
      alignSelf: "center",
    },
    texto: {
      textAlign: "center",
      fontSize: 20,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Store")}>
        <Text style={styles.texto}>Ir a tienda</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
