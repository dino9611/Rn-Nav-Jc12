import React from 'react';
import Center from './../component/Center';
import { 
    Text,
    Button,
    View 
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