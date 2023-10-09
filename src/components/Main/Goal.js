import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { Icon } from '@rneui/themed/dist'

const Goal = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style = {styles.container}>
      <Text style = {styles.text}>Change Daily Goal</Text>
    </TouchableOpacity >
  )
}

export default Goal

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:"20%",
        backgroundColor:colors.prusBlue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:"3%",
    },
    text:{
        color:colors.aero,
        fontWeight:'bold',
      
    }
  
})