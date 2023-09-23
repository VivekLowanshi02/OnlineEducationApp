import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text,View,StyleSheet,TouchableOpacity, Image } from "react-native";



const Menu =()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.ButtonStyle}
        onPress={()=>navigation.navigate("Course")}>
        <Image
        style={styles.IconStyle}
        source={{uri:"https://img.icons8.com/?size=512&id=79277&format=png",}}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle}
        onPress={()=>navigation.navigate("UserData")}>
        <Image
        style={styles.IconStyle}
        source={{uri:"https://img.icons8.com/?size=512&id=69591&format=png",}}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle}
        onPress={()=>navigation.navigate("About")}>
        <Image
        style={styles.IconStyle}
        source={{uri:"https://img.icons8.com/?size=512&id=59719&format=png",}}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle}
        onPress={()=>navigation.navigate("Contact")}>
        <Image
        style={styles.IconStyle}
        source={{uri:"https://img.icons8.com/?size=512&id=59769&format=png",}}
        />
        </TouchableOpacity>

       
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    
    textStyle:{
        textTransform:"uppercase",
        marginVertical:20,
    },
    IconStyle:{
        width:"100%",
        height:40,
        aspectRatio:1,
    },
});

export default Menu;