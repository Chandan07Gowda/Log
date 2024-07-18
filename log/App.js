import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import Mail from "./Screens/Mail"
import Verification from "./Screens/Verification"
import Reset from "./Screens/Reset"

const Stack=createNativeStackNavigator()

const App=()=>{
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Email" component={Mail} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Reset_Password" component={Reset} /> 
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
















// import React from "react";
// import {} from "react-native"
// import Login from "./Screens/Login";

// const App=()=>{
//   return(
//     <Login />
//   )
// }

// export default App;