import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo2.png")} />
 
      <StatusBar style="auto" />

       <TouchableOpacity>
        <Text style={styles.Word}>LOGIN</Text>
      </TouchableOpacity>
  
       <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'pc.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tài khoản"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'pa.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.LoginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.twitter}> 
         <Image style={styles.image} source={require("./assets/tw.png")} /> 
      </TouchableOpacity>
 <TouchableOpacity style={styles.facebook}> 
          <Image style={styles.image} source={require("./assets/fb.png")} /> 
        </TouchableOpacity>
 
      <TouchableOpacity>
        <Text style={styles.Question}>Bạn chưa có tài khoản ?</Text>
      </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.SignupButton]} onPress={() => this.onClickListener('signup')}>
          <Text style={styles.SignupText}>Sign Up</Text>
        </TouchableOpacity>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d64b4b",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 20,
    height: 173,
    width: 170,
  },
 
 inputContainer: {
     borderWidth: 3,
      backgroundColor: '#FFFFFF',
     borderRadius: 8,
      borderStyle: "solid",
      width:250,
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  }, 
  Question: {
    height: 30,
    marginTop: 120,
    marginBottom: 1,
    fontSize: 14,
  },
  Word: {
    height: 30,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 18,
  },
 
  SignupButton: {
   backgroundColor: "#b41616",
   width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
     borderStyle: "solid",
     borderColor: '#000000',
      borderWidth: 2,
      borderRadius: 8,
  },
  LoginButton: {
    backgroundColor: "#b41616",
   width: "50%",
    height: 40,
    borderStyle:"solid",
    borderColor: '#000000',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 2,
      borderRadius: 8,
  },
  LoginText: {
    color: 'white',
  },
  SignupText: {
    color: 'white',
  },
   inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
     borderWidth: 2,
      borderRadius: 2,
       justifyContent: 'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  twitter: {
    width: 20, height: 20,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
    },
    facebook: {
     width: 20, height: 20,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
      },
  });
