import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import { Input } from 'react-native-elements';
import Home from './Home';

const SingUp = (props) => {
  return(
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.container}>
        <Image source={require('../assest/blue-icon.png')} 
         resizeMode="center" style={styles.Image}/>
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>Create an Account</Text>
        <Inputs name="Full Name" icon="user"/>
        <Inputs name="Email" icon="envelope"/>
        <Inputs name="Phone" icon="phone"/>
        <Inputs name="Password" icon="lock" pass={true}/>
        <Inputs name="Confirm Password" icon="lock" pass={true}/>
        <Submit color="#0251ce" title="Create"/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.textBody}>Move on Next Screen</Text>
        <Text style={[styles.textBody,{color:"blue"}]} onPress={()=>
        props.navigation.navigate('Home')}>Go Home</Text>
      </View>
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  Image:{
    width:340,
    height:210,
    marginVertical:10,
  },
  textTitle:{
    fontSize:30,
    fontFamily:'Foundation',
    marginVertical: 4, 
  },
  textBody:{
    textAlign:'center',
    fontSize:16,
    fontFamily:'Foundation',
  }
});

export default SingUp;