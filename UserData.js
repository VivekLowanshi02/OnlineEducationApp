import react from "react-native";
import React, { useState,useEffect } from "react";
import { Text,
    View,
    StyleSheet,
    FlatList,
    Image } from "react-native";

const UserData =()=>{
    const [isLoaded,setIsLoaded] = useState(true);
    const [myData, setMyData] = useState([]);

    const getUserData = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const realData = await response.json();
        setMyData(realData);
        setIsLoaded(false);
        // console.log(realData)
    }catch(error){
        console.log(error);
    }
};
    useEffect(() => getUserData(),[]);
 
    const showUserData =({item})=>{
    return <View style={styles.card}>
           <View style={styles.imgContainer}>
            <Image style={styles.imgStyle}
               source={{uri:item.image}}
            />
        </View>
        <View>
            <View style={styles.bioDataContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>
                 {item.id<10 ? `#0${item.id}`: `#{item.id}`}
                </Text>
            </View>
            <View style={styles.mainContain}>
                <Text style={styles.myName}>Name:{item.body}</Text>
                <Text style={styles.myEmail}>email:{item.email}</Text>
                <Text style={styles.myMobile}>mobile:{item.mobile}</Text>
            </View>
        </View>
    </View>
};

    return(
        <View>
            <Text style={styles.mainHeader}>List of student</Text>
            <FlatList
                keyExtractor={(item)=>item.id}
                data={myData}
                renderItem={showUserData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        minHeight:"100%",
        paddingVertical:50,
        backgroundColor:"#ebedee"
    },
    card:{
        width:250,
        height:350,
        backgroundColor:"#fff",
        borderRadius:5,
        margin:20,
    },
    bioDataContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#353535",
        paddingVertical:10,

    },
    idNumber:{
        fontSize:20,
        color:"rgba(255,255,255,0.5)",
        paddingRight:10,

    },
    bioData:{
        fontSize:30,
        color:"#fff",
    },
    mainHeader:{
        fontSize:20,
        alignItems:"center",
        color:"#a18ce5",
    },
    imgContainer:{
        padding:10,
    },
    imgStyle:{
        width:"100%",
        height:180,
    },
    mainContain:{
        padding:10,
        backgroundColor:"#353535",
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    myName:{
        fontSize:14,
        color:"#fff",
        marginBottom:10,
        alignSelf:"flex-start",
        textTransform:"capitalize",
        fontFamily:"sans",
    },

});

export default UserData;


