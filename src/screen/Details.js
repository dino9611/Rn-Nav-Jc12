import React,{useContext} from 'react';
import Center from './../component/Center';
import { 
    Text,
    Button,
    View ,
    AsyncStorage
} from 'react-native';
import {Authcontext} from './../context/Authcontext'


export default ({route})=>{
  const {signinout}=useContext(Authcontext)
    return(
      <Center>
        <Text>
          {route.params.name}
        </Text>
        <Button
          title='sign out'
          onPress={ async ()=>{
            await AsyncStorage.removeItem('login')
            signinout()
          }}
        />
      </Center>
    )
}