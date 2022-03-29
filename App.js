import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
// import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import Login from "../AwesomeProject/screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListMan } from "../AwesomeProject/screen/drawerScreens/ListMan";
import HomeScreen from "../AwesomeProject/screen/drawerScreens/HomeScreen";
import RegisterScreen from "../AwesomeProject/screen/register";
const Stack = createNativeStackNavigator();
export default App = function () {
  return (
    <>
      {/* <AppLoader/> */}
      {/* <SignUpView/> */}
      {/* <Login/> */}
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="dangky" component={SignUpView} />
          <Stack.Screen name="dangky" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
