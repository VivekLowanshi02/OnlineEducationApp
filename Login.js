import React from "react";
import { View, StyleSheet, Text, Image, ScrollView} from "react-native";
import {Input} from "react-native-elements";
import SingUp from "./SignUp";
import Submit from "./submit";
import Account from "./Account";

const Login = ({navigation}) =>{
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <Image
                    source={require('../assest/insta icon.png')}
                    resizeMode="center"
                    style={styles.image}
                />
                <Text style={styles.textTitle}>Welcome Vivek</Text>
                <Text style={styles.textBody}>Log in Your Account</Text>
                <View style={{marginTop:20}} />
                <Input name="Email" icon="user" />
                <Input name="Password" icon="lock" pass={true} />
                <View style={{width:'90%'}}>
                <Text style={[styles.textBody, {alignSelf:'flex-end'}]}>Forgot Password?</Text>
                </View>

                <Submit title="LOG IN" color="#0148a4" />  
                <Text style={styles.textBody}>Or Connect Using</Text>

                <View style={{flexDirection: 'row'}}>
                    <Account color="#3b5c8f" Icon="facebook" title="Facebook" />
                    <Account color="#ec482f" Icon="google" title="Google"/>
                </View> 
                <View style={{flexDirection:'row', marginVertical:5}}>
                    <Text style={styles.textBody}>Don't have an Account?</Text>
                    <Text style={[styles.textBody,{color:'blue'}]} 
                    onPress={()=>navigation.navigate('Home')}> Sing up</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:800,
        height:180,
        marginVertical:20,
    },
    textTitle:{
        fontFamily:'Foundation',
        fontSize:30,
        marginVertical:10,
    },
    textBody:{
        fontFamily: 'Foundation',
        fontSize: 16,

    }
});

export default Login;
