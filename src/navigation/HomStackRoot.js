import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screen/Home'
import {Button} from 'react-native'
import Details from './../screen/Details'
const HomeStack=createStackNavigator()


const HomeStackRoot=({navigation})=>{
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
        <HomeStack.Screen name='Home' component={HomeScreen} options={{
          headerRight:()=>(<Button
            title='draw'
            onPress={()=>navigation.openDrawer()}
          />)
        }}/>
        <HomeStack.Screen name='Details' component={Details} initialParams={{name:'Details user'}}/>
      </HomeStack.Navigator>
    )
}
export default HomeStackRoot