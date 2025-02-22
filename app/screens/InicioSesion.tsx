import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useRouter } from "expo-router";
import { supabase } from "../../utils/supabase";

import { NavigationProp } from "@react-navigation/native";

export default function InicioSesion({ navigation }: { navigation: NavigationProp<any> }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setCargando(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Éxito", "Inicio de sesión exitoso");
      router.push("/");
    }
    setCargando(false);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-black px-6`}>
      <Text style={tw`text-green-500 text-3xl font-bold mb-6`}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={tw`w-full p-3 border border-green-500 rounded-lg text-white`}
        placeholderTextColor="#00FF00"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tw`w-full p-3 border border-green-500 rounded-lg text-white mt-4`}
        placeholderTextColor="#00FF00"
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={cargando}
        style={tw`w-full bg-green-500 py-3 rounded-lg mt-6 ${cargando ? "opacity-50" : ""}`}
      >
        <Text style={tw`text-black font-bold text-lg text-center`}>
          {cargando ? "Cargando..." : "Iniciar Sesión"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("./Registro")} style={tw`mt-4`}>
        <Text style={tw`text-green-500 text-lg`}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
