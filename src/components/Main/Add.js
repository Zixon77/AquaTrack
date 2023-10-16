import { StyleSheet, Text, TextInput, View ,Button, TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import store from '../../util/store'
import colors from '../../assets/colors'
import {useNavigation} from "@react-navigation/native"
import { TouchableWithoutFeedback,Keyboard } from 'react-native'
import Portion from './Add/Portion'
const Add = (props) => {

  const navigation = useNavigation();
  const[addAmount,setAddAmount] = useState(0)
  const [expanded, setExpanded] = useState(false);

  console.log(addAmount)

    const submit = () =>{ 
        store.storeAdd(addAmount)
        navigation.goBack()
    }

    const addPortion = (amo) =>{
       console.log(amo)
       setAddAmount(amo.toString())
    }

  return (
    <>
    <SafeAreaView backgroundColor = {colors.polyBlue}/>
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style = {styles.container}>
          <Text style = {styles.header}>Add Water</Text>
          <View style = {styles.inputContainer}>
            <TextInput
              style = {styles.input}
              placeholder='0'
              placeholderTextColor={colors.aero}
              value={addAmount}
              onChangeText={text => setAddAmount(text)}
              keyboardType='number-pad'
              maxLength={3}
            />
            <Text style = {styles.text}>fl oz</Text>
          </View>
        <View style = {styles.row}>
         <Portion onPress = {addPortion} name = "cup" amount = {16}/>
         <Portion onPress = {addPortion}  name = "bottle-soda-classic" amount = {32}/>
        </View>
        <View style = {styles.row}>
          <Portion onPress = {addPortion}  name = "watering-can" amount = {48}/>
          <Portion onPress = {addPortion}  name = "bathtub" amount = {64}/>
        </View>
          <View style = {styles.buttons}>
            <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={submit}>
              <Text style = {styles.buttonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={() =>{navigation.goBack()}}>
              <Text style = {styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableWithoutFeedback>
    </>
  )
}

export default Add

const styles = StyleSheet.create({
    container:{
       backgroundColor:colors.polyBlue,
        justifyContent:"center",
        alignItems:'center',
        flex:1
    },
    button:{
      backgroundColor:colors.prusBlue,
      justifyContent:"center",
      alignItems:'center',
      borderRadius:20,
      width:"80%",
      height:"35%",
      margin:"2%"
    },
    buttonText:{
      color:colors.aero,
      fontSize:20,
      fontWeight:'bold',
    },
    header:{
      fontSize:30,
      color:"white",
      fontWeight:"bold",
      position:"absolute",
      top:"1%",
      alignSelf:"flex-start",
      margin:"5%"
    },
    input:{
      borderBottomWidth:1,
      borderColor:colors.aero,
      color:colors.aero,
      width:"65%",
      height:"75%",
      fontSize:35,
    },
    inputContainer:{
      width:"100%",
      height:"10%",
      justifyContent:"center",
      alignItems:'center',
      flexDirection:"row",
      position:"absolute",
      top:"10%"
    },  
    text:{
      color:colors.aero,
      fontSize:35,
      marginLeft:"5%",
    },
    buttons:{
      width:"100%",
      justifyContent:"center",
      alignItems:'center',
      height:"20%",
      position:"absolute",
      bottom:"1%"
    },
    row:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:'center',
      width:'100%',
      height:'30%',

  
    }

  
})