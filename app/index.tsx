import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

export default function Index() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Encabezado */}
      <View style={tw`flex-row justify-between items-center p-4`}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="menu" size={30} color="green" />
        </TouchableOpacity>
        <Text style={tw`text-green-500 text-lg font-bold`}>
          App Canchas
        </Text>
        {/* Eliminamos el View vacío y usamos null */}
        <View style={{ width: 30 }} />
      </View>

      {/* Menú desplegable */}
      {menuVisible && (
        <View style={tw`absolute top-16 left-4 bg-gray-900 p-4 rounded-lg`}>
          <TouchableOpacity onPress={() => setMenuVisible(false)}>
            <Link href="/screens/InicioSesion" asChild>
              <Text style={tw`text-white p-2`}>Iniciar Sesión</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuVisible(false)}>
            <Link href="/screens/Registro" asChild>
              <Text style={tw`text-white p-2`}>Registrarse</Text>
            </Link>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
