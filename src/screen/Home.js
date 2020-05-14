import React from 'react';
// import Center from './../component/Center';
import { 
    Text,
    Button 
} from 'react-native';

export default function HomeScreen({route,navigation}) {
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