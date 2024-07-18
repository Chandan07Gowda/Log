import react from "react"
import { Alert, Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native"
import {useNavigation} from "@react-navigation/native"
const Verification=()=>{
    const nav=useNavigation();
    const button=()=>{
       nav.navigate('Reset_Password')
    }
    const send =()=>{
        Alert.alert(Math.random*1000000)
    }
    return(
        <KeyboardAvoidingView>
            <Image source={require("./Logo/Group3.jpeg")} style={styl.img}/>
            <Text style={styl.text1}>Verification Code</Text>
            <Text style={styl.text2}>Please confirm the security code received on your </Text>
            <Text style={{left:45}}>registered email.</Text>
            <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:35}}>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            <TextInput style={styl.input} keyboardType="numeric"></TextInput>
            </View>
            <View style={styl.button}>
                <Button title="Confirm" onPress={button}/>
            </View>
            <Text style={{left:135,alignItems:"center"}}>Did not receive the code?</Text>
            <Text style={{left:175,alignItems:"center",color:"blue",marginTop:10}} onPress={send}>Send Again</Text>

        </KeyboardAvoidingView>
    )
}

export default Verification;

const styl=StyleSheet.create({
    img:{
        width:266.34,
        height:234,
        top:5,
        left:90,
        right:20,
        marginTop:40
    },
    text1:{
        fontWeight:"600",
        color:"black",
        fontFamily:"Rubik",
        fontSize:25,
        marginTop:40,
        left:45,
        fontWeight:"bold"
    },
    text2:{
        left:45,
        marginTop:8 
    },
    input:{
        left:45,
        width:40,
        height:50,
        borderColor:'#ddd',
        borderWidth:2,
       
        borderRadius:3,
        flexDirection:'row',
        justifyContent:"space-evenly", 
        },
        button:{
            width:350,
            height:60,
           marginTop:50,
            left:45
        }
})