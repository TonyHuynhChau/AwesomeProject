import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import SignUpView from "./dangky";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManageScreen from './screens/ManageScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screen/HomeScreen";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: "#d64b4b",
            marginBottom: 20,
          }} 
        >
          <View>
            <Text>Shiba Shigeru</Text>
              <Text>Bvinhshikeru@gmail.com</Text>
          </View>
     <Image source={require("./assets/images/pc.png")}
     style={{ width: 60, height: 60, borderRadius: 30 }}
     />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "#d64b4b",
          padding: 20,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#d64b4b",
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={HomeScreen} name='Home' />
      <Drawer.Screen component={SettingScreen} name='Setting' /> 
      <Drawer.Screen component={ProfileScreen} name='Profile' />
      <Drawer.Screen component={ManageScreen} name='Manage' />
    </Drawer.Navigator>
  );
};
export default App = function   ()  {
     return (
        <>
            {/* <AppLoader/> */}
            {/* <SignUpView/> */}
            {/* <Login/> */}
            <NavigationContainer>{/* Rest of your app code */}
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="dangky" component={SignUpView} />
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
                 <DrawerNavigator />
            </NavigationContainer>
        </>
     );
 }

