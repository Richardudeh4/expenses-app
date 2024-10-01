import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){
  return(
  <BottomTabs.Navigator>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses}/>
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses}/>
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName='ExpensesOverview'>
        <Stack.Screen name='ManageExpense' component={ManageExpenses}/>
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview}/>
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
