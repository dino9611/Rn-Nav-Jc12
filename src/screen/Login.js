import React,{useContext} from 'react';
import Center from './../component/Center';
import { 
    Text,
    Button 
} from 'react-native';
import {Authcontext} from './../context/Authcontext'
const Login=({navigation})=>{
    const {signinout} =useContext(Authcontext)
  
    return(
    <Center>
        <Text>
          Login
        </Text>
        <Button
          title='masuk'
          onPress={()=>signinout()}
        />
        <Button 
          title='register to jc11'
          onPress={()=>navigation.push('Register')}
        />
         <Button 
          title='register to jc12'
          onPress={()=>navigation.push('Register',{kelas:'jc12'})}
        />
        {/* <Button 
          title='Login to'
          onPress={()=>navigation.push('Login')}
        /> */}
    </Center>
    )
}

export default Login;