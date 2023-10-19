import { StyleSheet, Text, View ,TouchableOpacity,TextInput ,Keyboard, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { Icon } from '@rneui/themed/dist'


/*
 <TouchableOpacity activeOpacity={0.8} style = {styles.container}>
      <Text style = {styles.text}>Change Daily Goal</Text>
    </TouchableOpacity >
    */
const Goal = () => {
  return (
    <View style = {styles.container}> 
      <TextInput
       style = {styles.input}
        keyboardType='number-pad'
        placeholder='Change Daily Goal'
        placeholderTextColor={colors.aero}
        clearTextOnFocus = {true}
    />
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:"20%",
        backgroundColor:colors.prusBlue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:"3%",
    },
    input:{
        color:colors.aero,
        fontWeight:'bold',
      
    }

  
})