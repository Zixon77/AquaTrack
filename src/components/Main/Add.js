import { StyleSheet, Text, TextInput, View ,Button, TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import store from '../../util/store'
import colors from '../../assets/colors'
import {useNavigation} from "@react-navigation/native"
import { TouchableWithoutFeedback,Keyboard } from 'react-native'

const Add = (props) => {

  const navigation = useNavigation();
  const[addAmount,setAddAmount] = useState(0)
  const [expanded, setExpanded] = useState(false);

    const submit = () =>{ 
        store.storeAdd(addAmount)
        navigation.goBack()
    }

  return (
    <>
    <SafeAreaView backgroundColor = {colors.polyBlue}/>
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style = {styles.container}>
          <Text style = {styles.header}>Add Water</Text>
          <TextInput
            style = {styles.input}
            placeholder='0'
            value={addAmount.toString()}
            onChangeText={text => setAddAmount(text)}
            keyboardType='number-pad'
          />
          <Button title = "back" onPress={() => navigation.goBack()}/>
          <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={submit}>
            <Text style = {styles.buttonText}>Done</Text>
          </TouchableOpacity>
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
      width:"75%",
      height:"7%",
      position:"absolute",
      top:"90%"
    },
    buttonText:{
      color:colors.aero,
      fontSize:20,
      fontWeight:'bold',
      marginHorizontal:"5%"
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
      width:"85%",
      height:"7%",
      fontSize:35,
      position:"absolute",
      top:"13%"
    },
    listItemContainer: {
      backgroundColor:colors.polyBlue
    },
    contentContainer: {
      padding:"5%",
      backgroundColor:"red",
      margin:"3%"
    },
  
})