import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { Icon } from '@rneui/base'
const Option = (props) => {
  return (
    <View style = {styles.container}>
        <Icon type={props.type} color = {colors.aero} size = {35} name = {props.name}/>
       <Text style = {styles.title}>{props.option}</Text>
       <TouchableOpacity style = {{position:"absolute",top:"10%",left:"90%"}}>
           <Icon color = {colors.aero} size = {30}  name = "navigate-next"/>
       </TouchableOpacity>
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    container:{
       alignItems:"center",
       flexDirection:"row",
       borderColor:colors.cruseal,
       borderBottomWidth:0.5,
       width:"90%",
       margin:"5%",
       paddingBottom:"7%",
    },
    title:{
        color:colors.aero,
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:"3%"
    }
})