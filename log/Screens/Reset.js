import react, { useState } from "react"
import { View,Text, KeyboardAvoidingView, Image, StyleSheet, TextInput, Button} from "react-native"
import {useNavigation} from '@react-navigation/native'

const Reset=()=>{
    const navi=useNavigation();
    const [password ,setPassword] = useState("");
    const [confirm , setConfirm] = useState("");
    const button=()=>{
        setConfirm("");
        setPassword("");
        navi.navigate('Login')
    }
    return(
        <KeyboardAvoidingView behavior="padding" style={{flex:1,justifyContent:"center",backgroundColor:"white"}}>
            <Image source={require("./Logo/Group4.jpeg")} style={styless.img}/>
            <Text style={styless.text}>Reset PassWord</Text>
            <Text style={styless.label}>Password</Text>
            <TextInput style={styless.input} secureTextEntry value={password} onChangeText={setPassword}/>
            <Text style={styless.label}>Confirm Password</Text>
            <TextInput style={styless.input} secureTextEntry value={confirm} onChangeText={setConfirm}/>
            <View style={styless.button}>
                <Button title="Confirm" onPress={button} style={{color:"blue"}}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Reset;

const styless=StyleSheet.create({
    img:{
        top:5,
        left:85,
    },
    text:{
        left:55,
        fontWeight:"600",
        fontWeight:"bold",
        color:"black",
        fontSize:22,
        marginTop:40
    },
    label:{
        marginTop:20,
        left:65
    },
    input:{
        marginTop:1,
        height:50,
        borderColor:'#ddd',
        borderWidth:2,
        fontSize:12,
        borderRadius:3,
        padding:3,
        marginHorizontal:60,
        columnGap:40
    },
    button:{
        width:290,
        height:40,
        marginTop:40,
        left:65
    }
})