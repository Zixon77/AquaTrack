import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import fullDate from '../util/Main/getDate'
import LastEntry from '../components/Main/LastEntry'
import Water from '../components/Main/Water'
import Cups from '../components/Main/Cups'
import colors from '../assets/colors'
import { Icon } from '@rneui/themed'
const Main = () => {
  return (
    <>
   <SafeAreaView backgroundColor = {colors.polyBlue}/>
   <StatusBar style='light'/>
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.settings}>
       <Icon name = "settings" color={colors.aero} size={35} />
      </TouchableOpacity>
      <Text style = {styles.title}>{fullDate}</Text>
        <Water/>
        <View style = {styles.bottomHalf}>
          <Cups/>
          <View style =  {styles.column}>
            <LastEntry/>
            <LastEntry/>
          </View>
        </View>
    </View>
    </>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:colors.polyBlue,
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
    marginVertical:'7%',
    color:"white"

  },
  bottomHalf:{
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center",
  //  borderWidth:1,
    width:"100%",
    height:'37%',
    marginTop:"5%",
  },
  column:{
  //  borderWidth:1,
    width:'50%',
    height:"90%"
  },
  settings:{
    position:"absolute",
    top:"2%",
    left:"0%",
    padding:"3%"
  }
})