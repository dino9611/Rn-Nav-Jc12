

import React,{useContext,createContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Center from './src/component/Center'
import {createStackNavigator} from '@react-navigation/stack'
// import {MyTabBar} from './src/component/Tabbar'
function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props}  badgeCount={1} />;
}

const HomeStack=createStackNavigator()


function HomeScreen({route,navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title='to Details'
        onPress={()=>navigation.navigate('Details')}
      />
    </View>
  );
}

const Details=({route})=>{
  return(
    <Center>
      <Text>
        {route.params.name}
      </Text>
    </Center>
  )
}
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

const SettingStack=createStackNavigator()



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

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

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
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
      {/* <AuthStack/> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
