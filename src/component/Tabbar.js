import React, { useState, useEffect,useRef } from 'react'
import * as Animated from 'react-native-animatable'
import {View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base'


export function MyTabBar({ state, descriptors, navigation }) {

    const [warna,setwarna]=useState('#fff')
    const [index,setindex]=useState(state.routes[0].name)
    // const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        if(index==='HomeStack'){
            setwarna('#6b49ba')
        }else{
            setwarna('#19b57f')
        }
    },[index])


    // const fadeIn = () => {
    //     // Will change fadeAnim value to 1 in 5 seconds
    //     let warna;
    //     if(index==='HomeTab'){
    //         warna='#fff'
    //     }else{
    //         warna='#673ab7'
    //     }
    //     Animated.timing(fadeAnim, {
    //       toValue: 2,
    //       duration: 1000,
    //       useNativeDriver:true
    //     }).start();
    //   };

  return (

    <Animated.View
    animation='fadeInUpBig'
        style={{
            // flexDirection: 'row',
            
        }}
    >
        <View
        // animation='fadeInUpBig'
        style={{flexDirection:'row',
        // borderWidth:1,
        paddingVertical:3,
        backgroundColor:warna,
           
        }}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = route.name ==='HomeStack'?'Home' : 'Profile'
            //   options.tabBarLabel !== undefined
            //     ? options.tabBarLabel
            //     : options.title !== undefined
            //     ? options.title
            //     : route.name;
            const isFocused = state.index === index;
            // if(state.index === index){
            //     // setindex(route.name)
            // }

            const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
                setindex(route.name)
                navigation.navigate(route.name);
            }
            };

            const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
            };

            return (
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1,alignItems:"center" }}
                key={index}
            > 
                <Icon 
                    name={route.name==='HomeStack'?'home':'user'} 
                    style={{ color: isFocused ? '#fff' : '#222' }} 
                    type='AntDesign' 
                />
                <Text style={{ color: isFocused ? '#fff' : '#222' }}>
                {label}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    </Animated.View>
  );
}

