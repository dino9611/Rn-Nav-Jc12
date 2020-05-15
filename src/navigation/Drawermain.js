import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import {Icon} from 'react-native-elements'
import Search from './../screen/search'
import TabNav from './TabNav'
import {Text} from 'react-native'

export default function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerPosition='right'
        drawerType='slide'
        // screenOptions=
        // overlayColor={'tra'}
        screenOptions={({route})=>({
          drawerIcon:({focused,color,size})=>{
              let iconName;
              // console.log(route.name)
              if (route.name === 'TabHome') {
                  iconName = focused
                      ? 'account-box'
                      : 'account-box';
                  // return null
              } else if (route.name === 'Search') {
                  iconName = focused ? 'account-box' : 'account-box';
              }
              // You can return any component that you like here!
              // console.log(color)
              return <Icon name={iconName} size={size}  color={color} />;
          },
          drawerLabel:({focused,color,size})=>{
            // let iconName;
            if (route.name === 'TabHome') {
                // iconName = focused
                //     ? 'home'
                //     : 'home';
              // return null
            } else if (route.name === 'Search') {
                // iconName = focused ? 'account-box' : 'account-box';
            }
            // You can return any component that you like here!
            // console.log(color)
            return <Text>{route.name}</Text>;
        },
        })}
        drawerContentOptions={{
          activeBackgroundColor:'transparent',
          inactiveBackgroundColor:'transparent',
          activeTintColor:'tomato',
          inactiveTintColor:'gray'
          // labelStyle:{
          //   color:'blue'
          // },
          // itemStyle:{
          //   marginVertical:20
          // }
        }}
      >
        <Drawer.Screen name="TabHome" component={TabNav} options={{
          swipeEnabled:false
        }}  />
        <Drawer.Screen name="Search" component={Search}  />
      </Drawer.Navigator>
    );
  }

