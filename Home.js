import React from "react";
import { StyleSheet,Text,View,Image } from "react-native";
import Menu from "../Component/Menu";

const Home =()=>{
   const Description = 
        "These application will be build on online education platform to have learn student and explore  for knowledge and skills";
    return(
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image 
                  style = {styles.headerImage}
                  resizeMode="contain"
                  source={require("../assest/Home02.jpg")}
                />
                <Text style ={[styles.mainHeader,{
                    fontSize:32,
                    color:"black",
                    justifyContent:"center",
                    textAlign:"center",
                    marginTop:20,
                    },
                    ]}>
                    Welcome to
                </Text>

                <Text 
                    style ={[styles.mainHeader,{
                    fontSize:32,
                    color:"green",
                    justifyContent:"center",
                    textAlign:"center",
                    marginTop:0,
                    },
                    ]}>
                    Online Education 
                </Text>
                <Text style={styles.bgStyle}>{Description}
                </Text>
            </View>
            <View style={styles.MenuStyle}>
                <View style={styles.lineStyle}></View>
                <Menu/>
                <View 
                 style={[
                    styles.lineStyle,
                    {
                        marginVertical:10
                    },
                 ]}>

                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        height:"100%",
        display:"flex",
        justifyContent:"space-between",
        paddingHorizontal:30,
        backgroundColor:"white",
        textAlign:"center",
    },

    homeTop:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 15,
    },

    headerImage:{
        height:undefined,
        width:"80%",
        aspectRatio:1,
        display:"flex",
        alignItems:"stretch",
        marginTop:30,
        borderRadius:5,
    },

    mainHeader:{
        fontSize:30,
        color:"#344055",
        textTransform:"uppercase",
    },

    bgStyle:{
        textAlign:"left",
        fontSize:15,
        color:"#7d7d7d",
        marginTop:12,
        paddingBottom:50,
        lineHeight:24,
    },

    lineStyle:{
        marginBottom:10,
        borderWidth:0.5,
        borderColor:"grey",
    },

});


export default Home;