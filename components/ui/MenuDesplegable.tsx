import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import tw from "tailwind-react-native-classnames";
import { supabase } from "../../utils/supabase";

interface MenuDesplegableProps {
  isVisible: boolean;
  setMenuVisible: (visible: boolean) => void;
  isAdmin: boolean;
  isAuthenticated: boolean;
}

export default function MenuDesplegable({ isVisible, setMenuVisible, isAdmin, isAuthenticated }: MenuDesplegableProps) {
  if (!isVisible) return null;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
    } else {
      setMenuVisible(false);
    }
  };

  return (
    <View style={tw`absolute top-16 left-4 bg-gray-900 p-4 rounded-lg`}>
      {/* Opciones para usuarios no autenticados */}
      {!isAuthenticated && (
        <>
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
        </>
      )}

      {/* Opciones para usuarios autenticados */}
      {isAuthenticated && (
        <>
          {/* Perfil */}
          <TouchableOpacity onPress={() => setMenuVisible(false)}>
            <Link href="/screens/Perfil" asChild>
              <Text style={tw`text-white p-2`}>Mi Perfil</Text>
            </Link>
          </TouchableOpacity>

          {/* Panel de Administrador (solo para admin) */}
          {isAdmin && (
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Link href="/screens/AdminPanel" asChild>
                <Text style={tw`text-white p-2`}>Panel de Administrador</Text>
              </Link>
            </TouchableOpacity>
          )}

          {/* Cerrar Sesión */}
          <TouchableOpacity onPress={handleLogout}>
            <Text style={tw`text-white p-2`}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}