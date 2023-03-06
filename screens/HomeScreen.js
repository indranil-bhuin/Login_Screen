import { StyleSheet, Text, View, SafeAreaView, ScrollView, BackHandler, Alert, TouchableOpacity } from 'react-native'
// import {
//   useFocusEffect
//  } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
// import FlatCards from '../components/FlatCards'
// import ElevatedCards from '../components/ElevatedCards'
import FancyCard from '../components/FancyCard'
import ActionCard from '../components/ActionCard'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { storeData } from './Sync';

const HomeScreen = ({navigation}) => {

  const isSignOut=()=>{
    navigation.navigate("Login")
    storeData('isLoggedIn','false')
  }

// const handleSignOut = async () => {
//     navigation.navigate("Login");
//   }

   return (
    <SafeAreaView>
        <ScrollView>
          <View style= {styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
              onPress={isSignOut}
              style={[styles.button, styles.buttonOutline]}
              >
              <Text style={styles.buttonOutlineText}>Logout</Text>
              </TouchableOpacity>
            </View>
            </View>
            {/* <FlatCards />
            <ElevatedCards /> */}
            <FancyCard />
            <ActionCard />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0EC57',
      paddingBottom: 50
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
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
