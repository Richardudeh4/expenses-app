import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({periodName, expenses}) => {

const expensesSum = expenses.reduce((sum, expense) => {
  return (
    sum + expense.amount
  )
}, 0);

  return (
    <View style={styles.container}>
    <Text style={styles.period}>{periodName}</Text>
    <Text style={styles.period}>{expensesSum}</Text>
    <Text></Text>
    </View>
  )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding:8,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6, 
        backgroundColor: GlobalStyles.colors.primary50,
        alignItems: "center",
    },
    period: {
      fontSize:12,
      color: GlobalStyles.colors.primary400,
    },
    sum:{
      fontSize:16,
      fontWeight: 'bold',
      color: GlobalStyles.colors.primary500,
    }
})