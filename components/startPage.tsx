import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const StartPage = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-undo-sharp" size={24} color="black" />
      <Text style={styles.text}>PEDIDO N</Text>
      <Ionicons name="heart-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    backgroundColor: "#EFE7DD",
    padding: 20, 
  },
  text: {
    fontSize: 20,
    fontWeight: "bold", 
    textAlign: "center",
  },
});

export default StartPage;
