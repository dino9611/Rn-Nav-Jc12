import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screen/Home'
import Details from './../screen/Details'
const HomeStack=createStackNavigator()


const HomeStackRoot=()=>{
    return(
      <HomeStack.Navigator
        // screenOptions={{
        //   headerStyle:{
        //     backgroundColor:'#6b49ba'
        //   },
        //   headerTitleStyle:{
        //     fontWeight: 'bold',
        //   },
        //   headerTitleAlign:'center',
        //   headerTintColor:'#fff',
        // }}
      >
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='Details' component={Details} initialParams={{name:'Details user'}}/>
      </HomeStack.Navigator>
    )
}
export default HomeStackRoot