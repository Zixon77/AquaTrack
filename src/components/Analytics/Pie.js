import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { PieChart } from 'react-native-chart-kit'

const data = [
    {
      name: "Seoul",
      population: 210,
      color: "rgba(131, 167, 234, 1)",
      legendFontSize: 10
    },
    {
      name: "Toronto",
      population: 2930,
      color: "#F00",
      legendFontSize: 10
    },
  ];

  const screenWidth = (Dimensions.get("window").width) 

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

const Pie = () => {
  return (
    <View style = {{position:"absolute",top:"12%",left:"1%"}}>
    <PieChart
    data={data}
    width={screenWidth}
    height={230}
    chartConfig={chartConfig}
    accessor={"population"}
    backgroundColor={"transparent"}
    hasLegend ={false}
/>
    </View>

  )
}

export default Pie
const styles = StyleSheet.create({
    container:{

    }
})