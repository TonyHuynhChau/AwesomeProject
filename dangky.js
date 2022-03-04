import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
      repassword: '',
      fullName: '',
      email   : '',
      
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: '3.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tài khoản"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: '3.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: '3.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Xác nhận mật khẩu"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(repassword) => this.setState({repassword})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: '1.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Họ và Tên"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: '2.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d64b4b',
  },
  inputContainer: {
      borderBottomColor: '#000000',
      borderTopColor: '#000000',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#b41616",
  },
  signUpText: {
    color: 'white',
  }
});
