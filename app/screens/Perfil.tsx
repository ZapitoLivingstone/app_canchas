import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Perfil() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-green-500 text-lg font-bold`}>
        Perfil de Usuario
      </Text>
      <Text style={tw`text-white text-lg mt-5`}>
        perfl 😎😎😎
      </Text>
    </View>
  );
}
