import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity, 
    Linking
    } from "react-native";



const About =() =>{
    return(
        <View style={styles.AboutContainer}>
            <Text style={styles.mainHeader}>Vivek Lowanshi</Text>
            <Text style={styles.paraStyle}> I am React Native Developer</Text>

            <View>
                <Image 
                 style={styles.imgStyle} 
                 source={require('../assest/About.png')}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About ME !</Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}> I am React Native Developer and i really want to get the experience and explore my skills, I am sure i will be able to contribute something to the growth of the company, I strongly believe that your company will help me gain knowledge and inhance my skills...!!</Text>
            </View>
            <Text style={styles.mainHeader}>Follow Me on Social Networks</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>
                    Linking.openURL("https://www.instagram.com/accounts/login/")
                }>

                    <Image
                     style={styles.iconStyle}
                     source={require('../assest/clipart2664829.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.iconStyle}
                    onPress={()=>
                     Linking.openURL("https://reactnative.dev/")
                    }>

                    <Image
                     style={styles.iconStyle}
                     source={require("../assest/blue-icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>
                    Linking.openURL("https://www.youtube.com/watch?v=fyJ2UZk5iJ4&list=PPSV&ab_channel=ThapaTechnical")
                    }>
                    <Image
                     style={styles.iconStyle}
                     source={require('../assest/YouT.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    AboutContainer:{
        display:"flex",
        alignItems:"center",
    },

    imgStyle:{
        width:140,
        height:140,
        borderRadius:80,
    },

    mainHeader:{
        fontSize:16,
        color:"#344055",
        textTransform:"uppercase",
        fontWeight:"500",
        marginTop:15,
        marginBottom:8,
        textAlign:"center",
        fontFamily:"sans-serif",
    },
    paraStyle:{
        fontSize:15,
        color:"#7d7d7d",
        paddingBottom:15,
    },
    aboutLayout:{
        backgroundColor:"#4c5dab",
        paddingHorizontal:22,
        marginVertical:30,
    },
    aboutSubHeader:{
        fontSize:22,
        color:"#fff",
        textTransform:"uppercase",
        fontWeight:"500",
        marginVertical:15,
        alignSelf:"center",
    },
    aboutPara:{
        color:"#fff",
    },
    menuContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },

    iconStyle:{
        display:"flex",
        alignItems:"center",
        height:40,
        width:40,
        
    },
    
    

});


export default About;
