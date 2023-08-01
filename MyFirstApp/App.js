import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import GetStarted from './screens/Signin/GetStarted';
import SignIn from './screens/Signin/SignIn';
import SignUp from './screens/Registration/SignUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
