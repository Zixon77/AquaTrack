import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const Cups = () => {
  return (
    <View style = {styles.container}>
      <Text>Cups</Text>
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
})