import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import SignUpView from "./dangky";

import Login from "./Login";

const App = () => {
  return (
    <>
      {/* <AppLoader/> */}
      {/* <SignUpView/> */}
      <Login/>
    </>
  );
}

export default App;
