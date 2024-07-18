import react, { useState } from "react"
import {View,Text, TextInput, StyleSheet, Button, Alert} from "react-native"
import {useNavigation} from "@react-navigation/native"

const Mail=()=>{
    const navigation=useNavigation();
    const [eamil, setEmail]=useState('');
    const forget=()=>{
        if(!eamil){
            Alert.alert("Please Enter E-mail")
        }else{
        navigation.navigate('Verification')
        }
    }
    return (
        <View style={Stytlu.container}>
            <Text style={Stytlu.text}>Enter E-mail ID</Text>
            <TextInput style={Stytlu.TextInput} value={eamil} onChangeText={setEmail}/>
       
        <View style={Stytlu.button}>
            <Button title="Create Account" onPress={forget} />
 
        </View>
        </View>
)
}

export default Mail;

const Stytlu=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white"
    },
    text:{
        fontSize:24,
        fontFamily:"Rubik",
        color:"black",
        top:10,
        left:65,
        fontWeight:"600",
        marginBottom:20,
        fontWeight:"bold"
    },
    TextInput:{
        height:40,
        borderColor:'#ddd',
        borderWidth:2,
        marginBottom:10,
        borderRadius:2,
        padding:3,
        marginHorizontal:60,
        left:5,
        marginTop:15          
    },
    button:{
        width:300,
        height:40,
        top:10,
        marginBottom:350,
        borderRadius:400,
        left:60,
        color:"blue",
        borderEndEndRadius:5,
        
    }
})