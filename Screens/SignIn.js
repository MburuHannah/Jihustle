import React, {useState} from 'react'
import{View,Text,TextInput,Button,Stylesheet,} from 'react-native'

function Signin(){
    const [phoneNumber, setPhoneNumber] = useState('');
    const[password,setPassword]=useState('')

    const handlelogin=()=>{
        if (phonenumberr && password){
            console.log("Login Successful")
        
        }else{
            console.log("Please fill all the fields");
        
        }
    };
    return(
        <View styling={{padding:20}}>
         <Text style={{Fontsize:24,marginbottom:20}}>
            Welcome to Jihustle
         </Text>
         <TextInput
         placeholder="Enter your phone number"
         value={phoneNumber}
         onChangeText={setPhoneNumber}
         style={{
            borderwidth:1,
            bordercolor:'black',
            padding:10,
            marginbottom:10

         }}
         />
        <TextInput
            placeholder="Enter your password"
            value="{password}"
            onChangeText={setPassword}
            style={{
                borderwidth:1,
                bordercolor:'black',
                padding:10,
                marginbottom:10
            }}
                   />
         <Button title="Login" onPress={handlelogin}/>

        </View>
    )

}

export default Signin


