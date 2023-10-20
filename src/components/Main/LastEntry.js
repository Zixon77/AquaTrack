import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import store from '../../util/store'
import colors from '../../assets/colors'
import { useNavigation } from '@react-navigation/native'
const LastEntry = () => {

  const navigation = useNavigation()
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  useEffect( () =>{
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update the time every 1000 milliseconds (1 second)
  //[],{hour:"2-digit",minute:"2-digit",hour12:"false"}
  },[])

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Logs")} activeOpacity={0.75} style = {styles.container}>
      <Text style = {styles.header}>Last Log</Text>
      <Text style = {styles.time}>{store.addTime}</Text>
      <Text style = {styles.amount}>{store.addWater} fl oz</Text>
    </TouchableOpacity>
  )
}

export default LastEntry

const styles = StyleSheet.create({
    container:{
        width:"92%",
        height:"45%",
        backgroundColor:colors.prusBlue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:"3%",
    },
    header:{
      color:colors.aero,
      fontSize:20,
      fontWeight:'bold',
      alignSelf:"flex-start",
      marginHorizontal:"5%",
      marginBottom:"2%"
    },
    time:{
      color:colors.cruseal,
      fontSize:27,
      fontWeight:'bold',
      alignSelf:"flex-start",
      marginHorizontal:"5%"
    },
    amount:{
      color:colors.cruseal,
      fontSize:15,
      fontWeight:'bold',
      alignSelf:"flex-start",
      marginHorizontal:"5%"
    }
})