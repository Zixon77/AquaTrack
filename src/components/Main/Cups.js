import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import colors from '../../assets/colors'
import * as Progress from "react-native-progress"
import store from '../../util/store'
import {observer} from "mobx-react-lite"

const Cups =  observer( () => {
  
    useEffect(() =>{
      if(store.temp)
      {
        store.incrementCups()
      }
  },[store.temp])

  return (
    <View style = {styles.container}>
      <View style = {styles.progress}>
        <Progress.Bar 
        progress={store.amountCups/10}
        width={125}
        height={70}
        borderColor={colors.aero}
        color={colors.aero}
        
        animated
        />
      </View>
      <View style = {styles.cups}>
        <Text style = {styles.cupText}>{store.amountCups}/6</Text>
        <Text style = {styles.cupText}>Cups</Text>
      </View>
      
    </View>
  )
});

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
      fontSize:23
    }
})