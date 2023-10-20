import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import Main from './src/screens/Main';
import Add from './src/screens/Main/Add';
import Analytics from './src/screens/Analytics';
import colors from './src/assets/colors';
import Settings from './src/screens/Settings';
import Logs from './src/screens/Main/Logs';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

//Temp
const MainStack = () =>{
  return(
    <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown:false,
    animation:"default",}}>
    <Stack.Screen
      name = "Main"
      component={Main}
    />
    <Stack.Screen
      name = "Logs"
      component={Logs}
     />
  </Stack.Navigator>
  )
}

const Tabs = () =>{
  return(
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:colors.prusBlue,borderTopWidth:0},
    tabBarActiveTintColor:colors.aero,tabBarLabelStyle:{fontSize:13}  }} >
        <Tab.Screen
        options={{tabBarIcon : ({color,size}) =>(<Icon name= 'home' color={colors.aero} size={25}/>)}}
          name = "Home"
          component={MainStack}
        />
        <Tab.Screen
         options={{tabBarIcon : ({color,size}) =>(<Icon name= 'analytics' type=' MaterialIcons' color={colors.aero} size={25}/>)}}
          name = "Analytics"
          component={Analytics}
        />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,animation:"fade_from_bottom",gestureEnabled:false}}>
          <Stack.Screen
          name = "Tabs"
          component={Tabs}
          />
         <Stack.Screen
          name = "Settings"
          component={Settings}
        />
        <Stack.Screen
        name = "Add"
        component={Add}
       />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

