import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

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
      <TouchableHighlight onPress={() => navigation.navigate("Store")}>
        <Text style={styles.texto}>Ir a tienda</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Home;
