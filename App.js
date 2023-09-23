import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/Login";
import SingUp from "./src/SignUp";
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import UserData from "./src/UserData";
import Course from "./src/Course";
import CourseDetails from "./src/CourseDetails";
import inputs from "./src/inputs";
import Account from "./src/Account";
import submit from "./src/submit";



export default function App(){
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

              <Stack.Screen name="Login" component=
                {Login}
              />

              <Stack.Screen name="Home" component=
                {Home} options={{headerShown:false,}}
              />

              <Stack.Screen name="Course" component=
                {Course} options={{headerTitleStyle:{
                fontSize:25,
              }}}/>

              <Stack.Screen name="Contact" component=
               {Contact}
              />

              <Stack.Screen name="About" component=
               {About}
              />

              <Stack.Screen name="UserData" component=
                {UserData}
              />

              <Stack.Screen name="CourseDetails" component=
               {CourseDetails}
              />

            </Stack.Navigator>
        </NavigationContainer>
    )  
};

