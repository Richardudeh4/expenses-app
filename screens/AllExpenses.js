import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
  <ExpensesOutput  ExpensesPeriod="Total"/>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})