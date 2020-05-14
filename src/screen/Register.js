import React from 'react';
import Center from './../component/Center';
import { 
    Text,
    Button 
} from 'react-native';


export default ({navigation,route})=>{
 
    return(
    <Center>
        <Text>
            Register 
        </Text>
        <Text>
            Paramnya adalah {route.params.kelas}
        </Text>
        <Button 
            title='LOGIN to'
            onPress={()=>navigation.push('Login')}
        />
    </Center>
    )
}