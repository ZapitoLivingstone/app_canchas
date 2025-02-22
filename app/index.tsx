import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import MenuDesplegable from "../components/ui/MenuDesplegable";
import { useAuth } from '../utils/AuthContext';

export default function Index() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Encabezado */}
      <View style={tw`flex-row justify-between items-center p-4`}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="menu" size={30} color="green" />
        </TouchableOpacity>
        <Text style={tw`text-green-500 text-lg font-bold`}>App Canchas</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Componente del menu */}
      <MenuDesplegable isVisible={menuVisible} setMenuVisible={setMenuVisible} isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
    </View>
  );
}