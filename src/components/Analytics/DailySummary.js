import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
const DailySummary = () => {
  return (
    <View style = {styles.container}>
      <Text>DailySummary</Text>
    </View>
  )
}

export default DailySummary

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.prusBlue,
        width:"90%",
        height:"35%", 
        borderRadius:10,
    }
})