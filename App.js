import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNav from './Screens/MainNav';
import Sign_Up from './Screens/Sign_up'
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';

// 1. Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 2. Wrap everything in NavigationContainer
    <NavigationContainer>
      {/* 3. Define your navigator and screens */}
      <Stack.Navigator initialRouteName="MainNav">
      <Stack.Screen name="MainNav" component={MainNav} />
        <Stack.Screen name="SignUp" component={Sign_Up} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}