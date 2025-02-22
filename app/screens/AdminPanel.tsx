import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function AdminPanel() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-green-500 text-lg font-bold`}>
        Panel de Administrador
      </Text>
      <Text style={tw`text-white text-lg mt-5`}>
        Bienvenido, Administrador
      </Text>
    </View>
  );
}
