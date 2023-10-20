import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../../assets/colors'
import { Icon } from '@rneui/base'
const Log = (props) => {
    const item = props.item
  return (
    <>
    <View style = {styles.container}>
        <Icon type='entypo' name = "clock" size = {35}color = {colors.cruseal}/>
        <Text style = {styles.time}>{item.time}</Text>
      <Icon
            type='entypo'
            name = "water"
            size = {20}
            color = {colors.aero}
        />
      <Text style = {styles.amount}>{item.amount} fl oz</Text>
    </View>
    </>
  )
}

export default Log

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignSelf:"center",
        width:"95%",
        margin:"3%",
        padding:'5%',
        backgroundColor:colors.prusBlue,
        borderRadius:10,
    },
    time:{
        color:colors.cruseal,
        fontSize:30,
        fontWeight:'bold',
    },
    amount:{
        color:colors.aero,
        fontSize:25,
        fontWeight:'bold',
    
    }
})