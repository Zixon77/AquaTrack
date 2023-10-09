import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
const Tip = () => {
  return (
    <View style = {styles.container} >
      <Text style = {styles.header} >Daily Tip</Text>
      <Text style = {styles.amount}>
      Keep a reusable water bottle with you for easy hydration and to reduce plastic waste.
     </Text>
    </View>
  )
}

export default Tip

const styles = StyleSheet.create({
    container:{
        width:"100%",
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
      amount:{
        color:colors.cruseal,
        fontSize:12,
        fontWeight:'bold',
        alignSelf:"flex-start",
        marginHorizontal:"5%",
        width:'90%'
      }
})