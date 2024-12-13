import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    title: string,
    onPress: () => void
}

const MyButton : FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({

    container:{
        height:50,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        borderRadius: 30,
        

    },
    title:{
        color:"white",
        fontSize: 20,
        fontFamily:"Redressed-Reguler"
        
    }
})