import { StyleSheet, Text, View,Button,SafeAreaView,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../assets/colors'
import store from '../../util/store'
import Log from '../../components/Main/Logs/Log'
import { Icon } from '@rneui/base'
const Logs = () => {
    const navigation = useNavigation()
    /*
  
     */
  return (
    <>
    <SafeAreaView backgroundColor = {colors.polyBlue}/>
    <View style = {styles.container}> 
      <Text style = {styles.header}>Daily Logs</Text>   
        <FlatList
            showsVerticalScrollIndicator = {false}
            style = {styles.list}
            data={store.dateArray}
            renderItem={({item}) => <Log item = {item}></Log>}
            keyExtractor={item => Math.random()}
        />
        {store.dateArray.length == 0 ?
        <Text style = {styles.text}>No Logs Added</Text> : null}
      <TouchableOpacity style = {{position:"absolute",top:"3.75%",left:'20%'}} onPress={() => navigation.goBack()}>
          <Icon name='arrow-back'color={colors.aero} size={40}/>
     </TouchableOpacity>
    </View>
    </>
 
  )
}

export default Logs

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.polyBlue
    },
    header:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
        top:"1%",
        margin:"5%",
    },
    list:{
        width:"90%",
    },
    text:{
        position:"absolute",

        color:colors.aero,
        fontSize:20
    }
})