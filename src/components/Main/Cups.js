import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import colors from '../../assets/colors'
import * as Progress from "react-native-progress"
import store from '../../util/store'
const Cups = () => {

  const[waterLeft,setleft] = useState(store.amountLeft)
  useEffect(() =>{
    setleft(store.amountFilled)
  },[store.amountFilled])

  return (
    <View style = {styles.container}>
      <View style = {styles.progress}>
        <Progress.Bar 
        progress={0.25}
        width={125}
        height={70}
        borderColor={colors.aero}
        color={colors.aero}
        animated
        />
      </View>
      <View style = {styles.cups}>
        <Text style = {styles.cupText}>3/6</Text>
        <Text style = {styles.cupText}>Cups</Text>
      </View>
      
    </View>
  )
}

export default Cups

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:"70%",
        backgroundColor:colors.prusBlue,
        justifyContent:"center",
        flexDirection:"row",
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
    progress:{
      justifyContent:"center",
      alignItems:"center",
      transform:[{rotate: '270deg'}],
      width:"50%",
  
    },
    cups:{
      justifyContent:"center",
      alignItems:"center",
  
    },
    cupText:{
      color:colors.aero,
      fontWeight:'bold',
      fontSize:20
    }
})