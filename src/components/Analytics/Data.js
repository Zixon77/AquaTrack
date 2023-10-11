import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
const Data = () => {
  return (
    <View style = {styles.container}>
      <Text>Data</Text>
    </View>
  )
}

export default Data


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.prusBlue,
        width:"40%",
        height:"90%", 
        borderRadius:10,
        position:'absolute',
        left:"60%"
        
    }
})