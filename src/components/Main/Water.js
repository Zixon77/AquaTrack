import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Entypo } from '@expo/vector-icons';
import store from '../../util/store'
import { observer } from 'mobx-react-lite'
import colors from '../../assets/colors'
import {useNavigation} from "@react-navigation/native"


const Water = observer(() => {

  const navigation = useNavigation();

    const [fill,setFill] = useState(0)
    const [captureTime,setCaptureTime] = useState(new Date().toLocaleTimeString())
    const [added,setAdded] = useState(false)
    const[goal,setGoal] = useState(0)
    const addWater = () =>
    {
      navigation.navigate('Add')
     // const time = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:"false"})
      //store.storeTime(time)
    }

    useEffect(() =>{
      if(store.waterInputted )
      {
        setFill(fill+ parseInt(store.addWater))
        store.makeFalse()
        console.log(fill)
        setAdded(true)
      }

      const fillleft = 100-fill;
        setTimeout(() => {
          setGoal(fillleft)
        }, 1000);
    },[store.waterInputted])

    useEffect(() =>{
      if(added)
      {
        const time = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:"false"})
        store.storeTime(time)
        setAdded(false)
      }
    },[added])

    useState(() =>{
        setGoal(store.dailyGoal)
    },[store.dailyGoal])

  return (
    <View style = {styles.container}> 
      <View style = {styles.water}>
        <AnimatedCircularProgress
            size={275}
            width={33}
            fill={fill}
            tintColor={colors.aero}
            backgroundColor={colors.prusBlue}   
            delay={150}
            duration={1000}
            />
            <View style = {styles.waterText}>
             <Text style = {styles.text}>{goal} /{store.dailyGoal} fl oz</Text>
             <Text style = {styles.text2}>Remaining</Text>
            </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={addWater}>
        <View style = {styles.button}>
            <Text style = {styles.buttonText}>Add Water</Text>
            <Entypo name="water" size={25} color={colors.cruseal} />
        </View>
      </TouchableOpacity>
  
    </View>
  )
})

export default Water

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
  },
  water:{
    justifyContent:'center',
    alignItems:"center",
  },
  text:{
    fontSize:27,
    fontWeight:'bold',
    color:colors.aero,
  },
  text2:{
    fontSize:16,
    fontWeight:'bold',
    color:colors.aero,
  },
  text3:{
    fontWeight:'bold',
    color:colors.aero,
  },
  waterText:{
    justifyContent:'center',
    alignItems:"center",
    position:"absolute"
  },
  button:{
    flexDirection:"row",
    backgroundColor:colors.prusBlue,
    marginVertical:'3%',
    alignItems:"center",
    borderRadius:10,
    padding:"3%",

  },
  buttonText:{
    color:colors.aero,
    fontSize:20,
    fontWeight:'bold',
    marginHorizontal:"5%"
  }

})