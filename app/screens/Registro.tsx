import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Registro() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-green-500">Registro</Text>
      <TextInput placeholder="Nombre" className="text-green-500 border-green-500" />
      <TextInput placeholder="Email" className="text-green-500 border-green-500" />
      <TextInput placeholder="Contraseña" secureTextEntry className="text-green-500 border-green-500" />
      <Button title="Registrarse" color="#00FF00" />
    </View>
  );
}