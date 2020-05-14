import React from 'react';
// import Center from './../component/Center';
import { 
    Text,
    Button 
} from 'react-native';



export default ({route})=>{
    return(
      <Center>
        <Text>
          {route.params.name}
        </Text>
      </Center>
    )
}