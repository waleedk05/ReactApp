import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import GetStarted from "./screens/Signin/GetStarted";
import SignIn from "./screens/Signin/SignIn";
import SignUp from "./screens/Registration/SignUp";
import Otp from "./screens/Signin/Otp";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
