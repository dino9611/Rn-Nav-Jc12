import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './../screen/Login'
import Register from './../screen/Register'
import {Button} from 'react-native'
const AuthStack=createStackNavigator()

export default ()=>{
    return(
        <AuthStack.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="black"
                />
            ),
            headerRightContainerStyle:{
                marginRight:10
            },
            headerTitleAlign:'center',
            animationTypeForReplace:'pop'
            }}
            // headerMode='none'
            
        >
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen 
                name='Register' 
                component={Register} 
                initialParams={{kelas:'jc11'}}
                options={({route})=>({
                title:'Register '+ route.params.kelas,
                headerStyle: {
                    backgroundColor: route.params.kelas==='jc11'?'#f4511e':'blue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                
                })} 
            />
        </AuthStack.Navigator>
    )
}
