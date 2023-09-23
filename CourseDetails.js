import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity,FlatList } from "react-native";
import Course from "../api/Courseapi";

const CourseDetails =({navigation,route})=>{
    const id= route.params.courseId; 
    console.log(id);

    const SelectedCourse = Course.find((element)=>{
        return id === element.id;
    });

    return(
         <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image style=
                     {styles.cardImage}
                     source={SelectedCourse.image}
                     resizeMode="contain"
                    />
                </View>
                <Text style=
                 {styles.mainHeader}>
                 {SelectedCourse.title}
                </Text>

                <Text style=
                 {styles.description}>
                 {SelectedCourse.description}
                </Text>

                <Text style={styles.description}>
                    {SelectedCourse.Course1}
                </Text>
                <Text style={styles.description}>
                    {SelectedCourse.Course2}
                </Text>
                <Text style={styles.description}>
                    {SelectedCourse.Course3}
                </Text>
                
                
                <View style={styles.buttonContainer}>
                    <Text style={SelectedCourse.price}>{SelectedCourse.price}</Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={
                        ()=> navigation.navigate("Course")
                     }>

                        <Text style={styles.buttonText}>
                            Join Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return(
    <FlatList 
    keyExtractor={(item)=>item.id}
    data={Course}
    renderItem={courseCard}
    />
    );
    };



const styles = StyleSheet.create({
    cardImage:{
        width:"80%",
        height:undefined,
        aspectRatio:1,
    },
    mainContainer:{
        paddingHorizontal:10,
    },
    courseContainer:{
        padding:25,
        backgroundColor:"rgba(255,255,255,0.90)",
        textAlign:"center",
        borderRadius:5,
        shadowColor:"grey",
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation:8,
        marginVertical:30,
    },
    mainHeader:{
        fontSize:20,
        color:"#344055",
        textTransform:"uppercase",
        paddingBottom:15,
        textAlign:"center",
        fontFamily:"sans-serif",
    },
    description:{
        textAlign:"center",
        paddingBottom:10,
        lineHeight:20,
        fontSize:15,
        color:"#7d7d7d",
        // flexDirection:"row",
    },
    price:{
        textAlign:"center",
        paddingBottom:10,
        lineHeight:20,
        fontSize:15,
        color:"#7d7d7d",
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    buttonStyle:{
        backgroundColor:"#809fff",
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
        fontSize:12,
        flexDirection:"row",
        color:"#eee",
        textTransform:"capitalize",
        lineHeight:15,

    },
});

export default CourseDetails;