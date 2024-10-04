import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from "@expo/vector-icons"
import { useState } from 'react';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();



function ExpensesOverview({navigation}){
  return(
  <BottomTabs.Navigator screenOptions={{
    headerStyle: {backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor: "white",
    tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor }) => (
      <Ionicons
        name="add"
        size={24}
        color="white"
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate('ManageExpense')}
      />
    ),}}>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title: "Recent expenses",
      tabBarLabel: "Recent",
      tabBarIcon: ({color, size}) => (
         <Ionicons name="time" color="white" size={25}/>
        ) 
    }} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses}
    options={{
      title: "All Expenses",
      tabBarLabel: "All Expenses",
      tabBarIcon: ({color, size}) => (
        <Ionicons name="calendar" color="white" size={25}/>
      )
    }}
    />
  
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName='ExpensesOverview'>
        <Stack.Screen name='ManageExpense' options={{ presentation: "modal"}} component={ManageExpenses}/>
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
