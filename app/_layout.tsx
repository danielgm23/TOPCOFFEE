import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Produtos",
        }}
      />

      <Tabs.Screen
        name="pedidos"
        options={{
          title: "Pedido",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
        <Tabs.Screen
        name="infoProdutos"
        options={{
          title: "Info produtos",
        }}
      />
    </Tabs>

  );
};

export default _layout;
