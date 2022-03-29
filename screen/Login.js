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
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { response } from "express";
import { Keyboard } from "react-native-web";
export default Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userpassword, setuserPassword] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userName) {
      alert("Bạn hãy nhập tên tài khoản!");
      return;
    }
    if (!userpassword) {
      alert("Bạn hãy nhập mật khẩu");
      return;
    }

    let dataToSend = {
      UserName: userName,
      password: userpassword,
    };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://http://192.168.1.8:3000/DangNhap", {
      method: "POST",
      body: formBody,
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loder
        // setLoading(false);
        console.log(responseJson);
        // If server reponse message same as Data matched
        if (responseJson.status === "success") {
          AsyncStorage.setItem("user_id", responseJson.data.userName);

          console.log(responseJson.data.userName);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={"../images/Logo.png"} />
        <StatusBar style="auto" />
        <TouchableOpacity>
          <Text style={styles.Word}>Đăng Nhập</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={"../images/accounticon.png"}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Tài khoản"
            secureTextEntry={true}
            autoCapitalize="none"
            keyboardType="default"
            onChangeText={(username) => setUserName(userName)}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={"../images/passwordicon.png"}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.LoginButton]}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.LoginText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <View style={styles.icon}>
          <TouchableOpacity style={styles.twitter}>
            <Image style={styles.twitter} source={"../images/twitter.png"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook}>
            <Image style={styles.facebook} source={"../images/google.png"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.google}>
            <Image style={styles.google} source={"../images/fb.png"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.Question}>Bạn chưa có tài khoản ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.AButton]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.BButton]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.SignupButton]}
          onPress={handleSubmitPress}
        >
          // navigation.navigate('dangky');
          <Text
            style={styles.SignupText}
            onPress={() => navigation.navigate("dangky")}
          >
            Đăng Ký
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d64b4b",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginVertical: 20,
    height: 173,
    width: 170,
  },

  inputContainer: {
    borderWidth: 3,
    backgroundColor: "#d64b4b",
    borderRadius: 8,
    borderStyle: "solid",
    width: 250,
    height: 45,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  Question: {
    height: 30,
    marginTop: 120,
    marginBottom: 1,
    fontSize: 16,
  },
  Word: {
    color: "#fff",
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
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
  },
  LoginButton: {
    backgroundColor: "#b41616",
    width: "50%",
    height: 40,
    borderStyle: "solid",
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 8,
  },
  LoginText: {
    color: "white",
  },
  SignupText: {
    color: "white",
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    borderWidth: 2,
    borderRadius: 2,
    justifyContent: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    color: "white",
  },
  icon: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  twitter: {
    width: 40,
    height: 40,
    // marginRight:100,
    // marginBottom:10,
    // marginTop:10,
  },
  facebook: {
    width: 40,
    height: 40,

    // marginRight:5,
    // marginTop:-24.5,
  },

  google: {
    width: 40,
    height: 40,
    // marginLeft:30,
    // marginRight:30,
    // marginBottom:-90,
    // margin:-36.9,
  },

  AButton: {
    backgroundColor: "#b41616",
    width: "20%",
    height: 0,
    borderStyle: "solid",
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20.5,
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 8,
    marginLeft: 250,
  },

  BButton: {
    backgroundColor: "#b41616",
    width: "20%",
    height: 0,
    borderStyle: "solid",
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -9.5,
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 8,
    marginRight: 250,
  },
});
