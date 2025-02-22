import { Stack } from 'expo-router';
import { AuthProvider } from '../utils/AuthContext'; 

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
        <Stack.Screen name="screens/InicioSesion" options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="screens/Registro" options={{ title: 'Registro' }} />
        <Stack.Screen name="screens/AdminPanel" options={{ title: 'Panel de administrador' }} />
        <Stack.Screen name="screens/Perfil" options={{ title: 'Perfil' }} />
   
      </Stack>
    </AuthProvider>
  );
}
