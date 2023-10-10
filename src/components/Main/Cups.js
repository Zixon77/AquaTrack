import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import colors from '../../assets/colors'
import store from '../../util/store'
const Cups = () => {

  const[waterLeft,setleft] = useState(store.amountLeft)
  useEffect(() =>{
    setleft(store.amountFilled)
  },[store.amountFilled])

  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Cups {store.amountFilled}</Text>

    </View>
  )
}

export default Cups

const styles = StyleSheet.create({
    container:{
        width:"40%",
        height:"90%",
        backgroundColor:colors.prusBlue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    header:{
      color:colors.aero,
      fontSize:20,
      fontWeight:'bold',
      alignSelf:"flex-start",
      marginHorizontal:"5%",
      marginBottom:"2%"
    },
})