import React from 'react';

import { 
    Text,
    Button,
    View  
} from 'react-native';



export default function SearchScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
        <Button
          onPress={()=>navigation.navigate('TabHome',
          {
            screen:'HomeStack',
            params:{
              screen:'Details',
              params:{
                tes:'dino'
              }
            }
          }
          )}
          title='ke details'
        />
      </View>
    );
}