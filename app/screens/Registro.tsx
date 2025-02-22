import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useRouter } from "expo-router";
import { supabase } from "../../utils/supabase";
import { NavigationProp } from "@react-navigation/native";

export default function Registro({ navigation }: { navigation: NavigationProp<any> }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("+569"); // Prefijo inicial
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (!nombre || !email || !password || telefono.length !== 12) {
      Alert.alert("Error", "Todos los campos son obligatorios y el teléfono debe tener el formato +569XXXXXXXX.");
      return;
    }

    setCargando(true);

    // Registrar usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert("Error", error.message);
      setCargando(false);
      return;
    }

    // Guardar información adicional en la tabla `usuarios`
    const { error: insertError } = await supabase.from("usuarios").insert([
      {
        id: data.user?.id,
        nombre,
        email,
        telefono,
        rol: "user",
      },
    ]);

    if (insertError) {
      Alert.alert("Error", insertError.message);
      setCargando(false);
      return;
    }

    Alert.alert("Éxito", "Registro exitoso, ahora puedes iniciar sesión.");
    router.push("./InicioSesion");
    setCargando(false);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-black px-6`}>
      <Text style={tw`text-green-500 text-3xl font-bold mb-6`}>Registro</Text>

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={tw`w-full p-3 border border-green-500 rounded-lg text-white`}
        placeholderTextColor="#00FF00"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={tw`w-full p-3 border border-green-500 rounded-lg text-white mt-4`}
        placeholderTextColor="#00FF00"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Teléfono"
        value={telefono}
        onChangeText={(text) => {
          if (/^\+569\d{0,8}$/.test(text)) {
            setTelefono(text);
          }
        }}
        style={tw`w-full p-3 border border-green-500 rounded-lg text-white mt-4`}
        placeholderTextColor="#00FF00"
        keyboardType="phone-pad"
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
        onPress={handleRegister}
        disabled={cargando}
        style={tw`w-full bg-green-500 py-3 rounded-lg mt-6 ${cargando ? "opacity-50" : ""}`}
      >
        <Text style={tw`text-black font-bold text-lg text-center`}>
          {cargando ? "Registrando..." : "Registrarse"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("./InicioSesion")} style={tw`mt-4`}>
        <Text style={tw`text-green-500 text-lg`}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
