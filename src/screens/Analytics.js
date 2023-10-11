import { StyleSheet, SafeAreaView ,View, ScrollView } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import DailySummary from '../components/Analytics/DailySummary';
import Pie from '../components/Analytics/Pie';
import Data from '../components/Analytics/Data';
import Graphs from '../components/Analytics/Graphs';
//Daily Intake Summary
//Weekly / Monthly Progress
//Goals and Targets
//Visual Charts and Graphs: Bar graphs, line graphs, pie charts
//Milestones and achievements
//Education + recommendations


const Analytics = () => {
  return (
    <>
    <SafeAreaView backgroundColor = {colors.polyBlue}/>
    <View style = {styles.container}>
     <ScrollView  contentContainerStyle={{ marginVertical:"5%",
        alignItems:"center",minWidth:'100%',height:"100%"}} >
        <DailySummary/>
            <View style = {styles.row}>
              <Pie/>
              <Data/>
            </View>
        <Graphs/>
      </ScrollView>
    </View>
    </>

  )
}

export default Analytics

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.polyBlue,
        flexGrow:1
    },
    row:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      width:"90%",
      height:"45%",
    },
    scroll:{
      borderWidth:5,
      width:'100%',
      height:"100%",
      flexGrow:0
    }
})