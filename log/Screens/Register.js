import { useState } from "react"
import react from "react-native"
import {Text,View,Image,KeyboardAvoidingView, StyleSheet,TextInput,Button,Alert,TouchableOpacity } from "react-native"
import {useNavigation} from '@react-navigation/native'
const Register = () =>{
    const nav=useNavigation();
    const [FirstName ,setFirstName]=useState("");
    const [LastName , setLastName] = useState("");
    const [email , setEmail] =useState("");
    const [password , setPassword] =useState("");

    const button=()=>{
        if(!FirstName || !LastName || !email || !password){
            Alert.alert("Please Above fields");
        }else{
            Alert.alert("Thanks For SignUp");
        }
    }
    const SignIn=()=>{
        nav.navigate('Login');
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
            <Image source={require("./Logo/Group2.jpeg")} style={styles.img} />

            <Text style={styles.text}>Sign Up</Text>

            <Text style={styles.label}>First Name</Text>
            <TextInput  value={FirstName} onChangeText={setFirstName} style={styles.input} ></TextInput>
            <Text style={styles.label}>Last Name</Text>
            <TextInput  value={LastName} onChangeText={setLastName} style={styles.input} ></TextInput>
            <Text style={styles.label}>Email</Text>
            <TextInput  placeholder="chandan@gmail.com" value={email} onChangeText={setEmail} style={styles.input} ></TextInput>
            <Text style={styles.label}>PassWord</Text>
            <TextInput  value={password} onChangeText={setPassword} style={styles.input} secureTextEntry ></TextInput>

            <View style={styles.button}> 
                        <Button title="Create Account" onPress={button} ></Button>
            </View>

            <Text style={{fontSize:14,left:125,color:"black",marginTop:2,fontWeight:"400"}}>Already have an account? </Text>     
            <TouchableOpacity style={{left:195,bottom:19,top:5}}><Text style={{color:"blue",flexDirection:"row"}} onPress={SignIn}>Sign In</Text></TouchableOpacity>
        </KeyboardAvoidingView>
        
        
    )
}
export default Register;

const styles=StyleSheet.create({
    img:{
        width:246.34,
        height:234,
        top:5,
        left:80,
        right:20,
        bottom:10,
        marginBottom:10,
        marginStart:5
    },
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white"
    },
    text:{
        top:10,
        left:70,
        marginBottom:20,
        fontSize:20,
        color:"#000000",
        fontFamily:"Rubik",
        fontWeight:"900",
    },
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
        // color:'black',
        marginHorizontal:60
      },
      button:{
        width:300,
        height:40,
       left:60,
        borderRadius:400,
        marginBottom:10,
        marginTop:20,
        color:"blue"
      }
    });