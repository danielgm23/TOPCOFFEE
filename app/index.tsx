import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const App = () => {
  const [search, setSearch] = useState("");

  // Dados fictícios para exibir no card e no grid de produtos
  const products = [
    {
      id: 1,
      title: "Café expresso",
      subtitle: "R$ 07,00",
      image:
        "https://conscienciacafe.com.br/wp-content/uploads/2023/09/cafe-espresso-maquina-1024x683.jpg",
    },
    {
      id: 2,
      title: "Café Latte",
      subtitle: "R$ 10,00",
      image:
        "https://as2.ftcdn.net/v2/jpg/00/75/89/49/1000_F_75894966_grMyKtLrU2dDQzMNKxtkN9PfDxg5iQpE.jpg",
    },
    {
      id: 3,
      title: "Café Gelado",
      subtitle: "R$ 15,00",
      image:
        "https://baggiocafe.com.br/cdn/shop/articles/Cafe_gelado_1.png?v=1712149644",
    },
    {
      id: 4,
      title: "Café Afoggato",
      subtitle: "R$ 20,00",
      image:
        "https://conscienciacafe.com.br/wp-content/uploads/2023/09/cafe-espresso-maquina-1024x683.jpg",
    },
    {
      id: 5,
      title: "Cappuccino",
      subtitle: "R$ 12,00",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 6,
      title: "Café Mocha",
      subtitle: "R$ 18,00",
      image:
        "https://minhasreceitinhas.com.br/wp-content/uploads/2023/03/Cafe-mocha-2-1200x738.png",
    },
    {
      id: 7,
      title: "Café Americano ",
      subtitle: "R$ 08,00",
      image:
        "https://perfectdailygrind.com/pt/wp-content/uploads/sites/5/2021/04/PDG-Brasil-Headers-1.png",
    },
    {
      id: 8,
      title: "Macchiato",
      subtitle: "R$ 10,00",
      image:
        "https://uniquecafes.com.br/wp-content/uploads/2021/08/Destaque-Latte-Macchiato.jpg",
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/images/TOPCOFFE 2.png")}
          style={styles.image}
        />
      </View>
      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise seu produto!"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Card de Produto */}
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://milkmellowgelato.com.br/wp-content/uploads/2023/08/affogato-threeByTwoMediumAt2X-v2.jpg",
          }}
          style={styles.cardImage}
        />
      </View>

      {/* Grid de Produtos (2x2) */}
      <View style={styles.productGrid}>
        {filteredProducts.map((product, index) => (
          <View
            key={product.id}
            style={[
              styles.productCard,
              index === filteredProducts.length - 2 && styles.secondToLast, // penúltimo
              index === filteredProducts.length - 1 && styles.last, // último
            ]}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productSubtitle}>{product.subtitle}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 10, // Espaçamento entre o ícone e o campo de texto
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    flex: 1, // Faz o campo de texto ocupar o espaço restante
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left", // Alinha o texto à esquerda
    width: "100%", // Faz o título ocupar toda a largura do card
    marginLeft: 5, // Espaçamento entre o ícone e o campo de texto
  },
  productSubtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "left", // Alinha o subtítulo à esquerda
    width: "100%", // Faz o subtítulo ocupar toda a largura do card
    marginLeft: 5, // Espaçamento entre o ícone e o campo de texto
  },
  logo: {
    alignItems: "center",
  },

  secondToLast: {
    marginBottom: 10,
  },
  last: {
    marginBottom: 10,
  },
});

export default App;
