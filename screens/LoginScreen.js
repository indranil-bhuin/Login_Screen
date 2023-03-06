import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {useNavigation} from '@react-navigation/core'
//import {NavigationContainer} from '@react-navigation/native';
//import LoginScreen from './screens/LoginScreen';
//import HomeScreen from './HomeScreen';
import { storeData } from './Sync';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignUp = () => {
  //   if(email=="i" && password=="1"){
  //       AsyncStorage.setItem('isLoggedIn', 'true');
  //       navigation.replace("Home");
  //   }
  // };

  const[isLoggedIn,setIsLoggedIn]=useState('false')
    if(isLoggedIn==='true'){
        navigation.navigate("Home")
    }
    useEffect(()=>{
        const getData= async()=>{
            try{
                const value = await AsyncStorage.getItem('isLoggedIn');
                setIsLoggedIn(value)
            }
            catch(error){
            }
        }
        getData()
        },[]);              


    const onHandleLogin=()=>{
    
        if (password==="password" && email==="indranil@gmail.com"){
            storeData('isLoggedIn','true')    
            navigation.navigate("Home")
        }

    }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onHandleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onHandleLogin}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0EC57'
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
    },
    button: {
      backgroundColor: '#0B0A07',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16
    },
    buttonOutline: {
      backgroundColor: '#fff',
      marginTop: 5,
      borderColor: '#0B0A07',
      borderWidth: 2
    },
    buttonOutlineText: {
      color: '#0B0A07',
      fontWeight: '700',
      fontSize: 16
    }
})
