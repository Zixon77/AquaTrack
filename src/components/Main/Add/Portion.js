import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../../../assets/colors'
import { Icon } from '@rneui/base'
import {MaterialCommunityIcons} from "@expo/vector-icons"
const Portion = (props) => {
  return (
    <TouchableOpacity onPress={ () => props.onPress(props.amount)} activeOpacity={0.75} style = {styles.container}>
        <MaterialCommunityIcons name={props.name} size={80} color={colors.aero}/>
        <Text style = {styles.amount}>{props.amount} fl oz</Text>
    </TouchableOpacity>
  )
}

export default Portion

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"40%",
        height:'85%',
        margin:"3%",
        backgroundColor:colors.prusBlue,
        borderRadius:10
    },
    amount:{
        color:colors.cruseal,
        fontSize:25,
        fontWeight:'bold'
    }
})