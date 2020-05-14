

import React,{useContext,createContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'

import AuthStack from './src/navigation/AuthStack'

import {Authcontext} from './src/context/Authcontext'
import MyDrawer from './src/navigation/Drawermain'

const App = () => {
  const [Auth,setauth]=useState(false)
  const [username]=useState('dino')
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
