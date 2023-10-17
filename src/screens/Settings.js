import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../assets/colors'
import { Icon } from '@rneui/base'
import { TouchableOpacity } from 'react-native'
import Option from '../components/Settings/Option'
/*
Units of meausurement
Reminders / Notifciations
Personal Profile
Themes
Feedback and Support
Language
Export Data
Sync and Backup
*/
const Settings = () => {
    const navigation = useNavigation()
  return (
    <View style = {styles.container}>
        <Text className = "text-3xl text-white font-bold">Settings</Text>
        <TouchableOpacity style = {{position:"absolute",top:"7.75%",left:'20%'}} onPress={() => navigation.goBack()}>
          <Icon name='arrow-back'color={colors.aero} size={40}/>
        </TouchableOpacity>
      <View style = {styles.ops}>
        <Option type = "ionicons" name = "person" option = "Profile"/>
        <Option type = "ionicons" name = "notifications" option = "Notifications"/>
        <Option type = "entypo" name ="ruler" option = "Units"/>
        <Option type = "MaterialIcons" name = "backup" option = "Sync and Backup"/>
        <Option type = "entypo" name = "export" option = "Export Data"/>
        <Option type = "MaterialIcons" name = "contact-support" option = "Feedback and Support"/>
      </View>
      <Text style =  {styles.version}>v1.0.0</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.polyBlue,
    },
    ops:{
      width:'85%',
      justifyContent:"center",
      alignItems:"center",
      marginTop:"2%",
     // borderWidth:1
    },
    version:{
      color:"white",
      position:"absolute",
      bottom:"1%",
      left:"5%",
      fontWeight:"bold"
    }

    
})