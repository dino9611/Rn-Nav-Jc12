

import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import Center from './src/component/Center'

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import AuthStack from './src/navigation/AuthStack'

import {Authcontext} from './src/context/Authcontext'
import MyDrawer from './src/navigation/Drawermain'


const App = () => {
  const [Auth,setauth]=useState(false)
  const [username]=useState('dino')
  const [loading,setloading]=useState(true)


  useEffect(()=>{
    AsyncStorage.getItem('login')//keeplogin
    .then((res)=>{
      console.log(res)
      if(res==='iya'){
        setauth(true)
      }
    }).catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      setloading(false)
    })
  },[])

  if(loading){
    return(
      <Center>
        <Animatable.Text animation='bounce' iterationCount="infinite">Splash Screen</Animatable.Text>
      </Center>
    )
  }



  return (
    <Authcontext.Provider value={{
      Auth:Auth,
      username:username,
      signinout:()=>{
        setauth(!Auth)
      },
    }}>
      <NavigationContainer>
        {
          Auth?
          <MyDrawer/>
          :
          <AuthStack/>
        }
      </NavigationContainer>
    </Authcontext.Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
