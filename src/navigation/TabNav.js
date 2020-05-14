import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIconWithBadge from './../component/IconWithBadge'
import HomeStackRoot from './HomStackRoot'
import SettingStackRoot from './SettingStack'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()


export default ()=>{
    return(
        <Tab.Navigator
            // initialRouteName='HomeStack'

            // tabBar={props => <MyTabBar {...props} />}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                // iconName = focused
                //   ? 'ios-information-circle'
                //   : 'ios-information-circle-outline';
                return (
                    <HomeIconWithBadge
                    name={
                        focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline'
                    }
                    size={size}
                    color={color}
                    />
                );
                } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            // tabBarLabel:()=>null
            })}
            tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel:false,
            // activeBackgroundColor:'white',
            // inactiveBackgroundColor:'tomato'
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStackRoot}/>
            <Tab.Screen name='Setting' component={SettingStackRoot}/>
        </Tab.Navigator>
    )
}