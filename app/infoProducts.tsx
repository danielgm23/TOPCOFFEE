import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import StartPage from "@/components/startPage";
import Products from "@/components/products";
import Ionicons from "react-native-vector-icons/Ionicons";

// Componente de estrelas
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handleRating(index)}>
          <Ionicons
            name={index < rating ? "star" : "star-outline"} // Estrela cheia ou vazia
            size={24}
            color="#FFD700" // Cor dourada
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Componente de controle de quantidade
const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1); // Definindo a quantidade inicial

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1); // Aumenta a quantidade
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1); // Diminui a quantidade, mas não permite que fique abaixo de 1
    }
  };

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
        <Ionicons name="remove-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
        <Ionicons name="add-circle-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const InfoProducts = () => {
  const product = Products()[0];

  return (
    <SafeAreaView style={styles.corFundo}>
      <View>
        <StartPage />
      </View>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.row}>
          <Text style={styles.textTitle}>{product.title}</Text>
          <Text style={styles.textTitle}>{product.subtitle}</Text>
        </View>
        <StarRating />

        <Text style={styles.infoprodutos}>{product.info}</Text>

        <View style={styles.textContainer}>
          <Text style={styles.quantidade}>Quantidade</Text>

          <QuantityControl />
        </View>

        <Button title="Comprar agora"  />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  corFundo: {
    flex: 1,
    backgroundColor: "#EFE7DD",
  },
  container: {
    alignItems: "center",
    padding: 25,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  infoprodutos: {
    fontSize: 16,
    marginTop: 20,
    padding: 0,
    fontWeight: "bold",
  },
  starContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  quantidade: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%"
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  button: {
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },

  button : {

  }
});

export default InfoProducts;
