import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/login';
import { Home } from '../pages/home';

const Stack = createNativeStackNavigator();

export const StackRouters = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
