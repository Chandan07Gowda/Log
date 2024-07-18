import react, { useState } from "react"
import {Linking} from "react-native"
import { Alert, Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import{useNavigation} from "@react-navigation/native"



const Login = () =>{
    const Nav=useNavigation();
    const [email , setEmail]=useState("");
    const [password ,setPassword]=useState("");

    const forget=()=>{
        Nav.navigate('Email')
    };
    const signup=()=>{
       Nav.navigate('Register')
    }
    const button=()=>{
        if(!email || !password){
            Alert.alert("email and Password requried");
        }else{
            Alert.alert("Heyy")
        }
        setEmail("");
        setPassword("");
    }
    const FacebookLogin = () => {
        Linking.openURL('https://www.facebook.com/login');
      };
    
      const GoogleLogin = () => {
        Linking.openURL('https://accounts.google.com/Login');
      };
    
      const InstagramLogin = () => {
        Linking.openURL('https://www.instagram.com/accounts/login');
      };

    return(
            <KeyboardAvoidingView behavior="padding" style={stylo.container}>
            <Image source={require('./Logo/Group1.jpeg')} style={stylo.img}/>
                <View >
                     
                          <Text style={stylo.text}>  Log In </Text>
           
            
                            <Text style={stylo.label}>Email</Text>
                            <TextInput placeholder="chandan@gmail.com" value={email} onChangeText={setEmail} style={stylo.input} ></TextInput>
                            <Text style={stylo.label}>PassWord</Text>
                            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={stylo.input}></TextInput>
                             <Text onPress={forget} style={{position:"absolute",top:215,right:60,color:"blue"}}>Forget Password?</Text>
                        <View style={stylo.button}> 
                        <Button title="Login" onPress={button} ></Button>
                        </View>
                        <Text style={{left:60,marginTop:2}}>_______________________or_______________________</Text>
                        <View style={stylo.iconcontainer}>
                            <TouchableOpacity onPress={FacebookLogin} style={stylo.icon}>
                                <Icon name="facebook" size={30} color="blue"></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={InstagramLogin} style={stylo.icon}>
                                <Icon name="instagram" size={30} color="blue"></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={GoogleLogin} style={stylo.icon}>
                                <Icon name="google" size={30} color="blue"></Icon>
                            </TouchableOpacity>

                        </View>
                        <Text style={{fontSize:14,left:135,color:"black",marginTop:10,fontWeight:"bold"}}>Don't have an account? </Text>
                        <TouchableOpacity style={{left:285,bottom:19 }}><Text style={{color:"blue",flexDirection:"row"}} onPress={signup}>Sign Up</Text></TouchableOpacity>
                        
                    </View>
                
            </KeyboardAvoidingView>
    )
}

export default Login;

const stylo=StyleSheet.create({
   container:{
       flex:1,
       justifyContent:"center",
       backgroundColor:"White"
       },
       img:{
        width:246.34,
        height:234,
        top:10,
        left:75,
        bottom:10,
        marginBottom:10,
        marginStart:5
       },
       text:{
        fontFamily:"Rubik",
        fontWeight:"900",
        alignItems:"flex-start",
        marginHorizontal:60,
        fontSize:24,
        marginBottom:10,
        color:"#000000",
        marginTop:25

       },
    //    form:{
    //     marginBottom:10,
    //     marginTop:3,
    //     columnGap:10,
    //     backgroundColor:'white',
    //     padding:2,
    //     borderRadius:4,
    //     shadowColor:'black',
    //     shadowOffset:{
    //       width:0,
    //       height:2
    //     },
    //     shadowOpacity:0.15, 
    //     shadowRadius:2,
    //     elevation:2
    //   },
       input:{
        height:40,
        borderColor:'#ddd',
        borderWidth:1,
        marginBottom:10,
        borderRadius:2,
        padding:3,
        marginHorizontal:60,
        columnGap:40
      },
      label:{
        fontSize:16,
        marginBottom:2,
        fontWeight:'bold',
        color:'black',
        marginHorizontal:60
      },
      button:{width:300,
        height:40,
       left:60,
        borderRadius:400,
        marginBottom:20,
        marginTop:50
    },
    iconcontainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        top:5,
        marginBottom:10,
        marginTop:10
        // borderRadius:1,
        // elevation:0.2,
    },
    icon:{
        padding:10,
        borderRadius:3,
        borderWidth:2,
        
    }
});