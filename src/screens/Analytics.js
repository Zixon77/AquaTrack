import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
const Analytics = () => {
  return (
    <View style = {styles.container}>
      <Text>Analytics</Text>
    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.polyBlue
    }
})