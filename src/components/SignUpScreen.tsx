import { Alert, Image, ImageBackground, StyleSheet, Text, View, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import SocialMedia from '../components/SocialMedia'
import auth from "@react-native-firebase/auth"

const SignUpScreen  = ({navigation}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signUpTestFn = () => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => { 
            Alert.alert('User Created with those credentials, Please Login' );
             navigation.navigate("Login")
        })
        .catch((err)=>{
            console.log(err);
            Alert.alert(err.nativeErrorMessage)
        });
    };

    


  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/v714-bb-7b.jpg")}
        style = {styles.imageBackground}>

            <Image
                source={require("../assets/tiktokLogo.png")} 
                style={styles.tiktok}          
            />
        <Text style={styles.title}>TikTok Sign Up Screen</Text>

        <View style={styles.inputsContainer}>

            {/* value, onChangeText */}
            <MyTextInput value ={email} onChangeText={text => setEmail(text)} placeholder="Enter E-mail or Username"/>  
            <MyTextInput value = {password} onChangeText={text => setPassword(text)} placeholder="Password" secureTextEntry/>
            <MyTextInput value = {confirmPassword} placeholder="Confirm Password" secureTextEntry/>
            

            <MyButton onPress={signUpTestFn} title={"Sign Up"}/>

            <Text style = {styles.orText}>OR</Text>

            <SocialMedia/>
        </View>

        
      </ImageBackground>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    imageBackground:{
        height:"100%",
        resizeMode:"center",
        alignItems:"center"
        
    },
    tiktok:{
        height:50,
        width: 90,
        resizeMode:"center",
        position:"relative",
        right:20,
        top:50,
    },
    title:{
        fontSize: 40,
        color:"white",
        marginTop: 60,
        fontFamily:"Audiowide-Regular"
    },
    inputsContainer:{
        height: 450,
        width: "100%",
        backgroundColor:"white",
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center",
        marginTop: 30,
        paddingHorizontal:20
    },
    textD:{
        alignSelf: "flex-end",
        marginRight: 10,
        color:"black",
        marginBottom: 15,
        fontFamily:"NovaFlat-Regular"
    },
    orText:{
        fontSize:20,
        color:"gray",
        marginTop: 20,
        fontFamily:"Audiowide-Regular"
    }

});