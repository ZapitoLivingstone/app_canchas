import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Index() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-green-500`}>Bienvenido a Zapitolivingstone App Canchas</Text>
      <Link href="/screens/InicioSesion">
        <Text style={tw`text-green-500 mt-5`}>Iniciar Sesión</Text>
      </Link>
      <Link href="/screens/Registro">
        <Text style={tw`text-green-500 mt-5`}>Registrarse</Text>
      </Link>
    </View>
  );
}
