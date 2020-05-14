import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SettingsScreen from './../screen/Setting'

const SettingStack=createStackNavigator()


const SettingStackRoot=()=>{
    return(
      <SettingStack.Navigator
        // screenOptions={{
        //   headerStyle:{
        //     backgroundColor:'#19b57f'
        //   },
        //   headerTitleStyle:{
        //     color:'white'
        //   },
        //   headerTitleAlign:'center'
        // }}
      >
        <SettingStack.Screen name='Settings' component={SettingsScreen}/>
      </SettingStack.Navigator>
    )
  }

export default SettingStackRoot

