import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import fullDate from '../util/Main/getDate'
import LastEntry from '../components/Main/LastEntry'
import Water from '../components/Main/Water'
import Cups from '../components/Main/Cups'
import Goal from '../components/Main/Goal'
import colors from '../assets/colors'
import Tip from '../components/Main/Tip'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
const Main = () => {
  const navigation = useNavigation()
  return (
    <>
   <SafeAreaView backgroundColor = {colors.polyBlue}/>
   <StatusBar style='light'/>
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")} style = {styles.settings}>
        <Icon name = "settings" color={colors.aero} size={35} />
      </TouchableOpacity>
      <Text style = {styles.title}>{fullDate}</Text>
        <Water/>
        <View style = {styles.bottomHalf}>
          <View style =  {styles.column}>
             <Goal/>
            <Cups/>
          </View>
          <View style =  {styles.column}>
            <LastEntry/>
            <Tip/>
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
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
    fontSize:25,
    fontWeight:"bold",
    marginVertical:'6%',
    marginBottom:'10%',
    color:"white",
    alignSelf:'center'
  },
  bottomHalf:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    height:'37%',
    marginTop:"5%",
   // borderWidth:1
  },
  column:{
    width:'50%',
    height:"90%",
  //  borderWidth:1,
    justifyContent:'center',
    alignItems:"center",
  },
  settings:{
    position:"absolute",
    top:"3%",
    left:"1%",
    padding:"3%"
  }
})