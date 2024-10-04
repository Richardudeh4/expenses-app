import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: "A pair of shoes",
        amount: 35.65,
        date : new Date('2024-10-2'),
    },
    {
        id: 'e2',
        description: "A pair of trousers",
        amount: 45.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e3',
        description: "A pack of sugar",
        amount: 5.50,
        date : new Date('2024-9-28'),
    },
    {
        id: 'e4',
        description: "A pair of hand gloves",
        amount: 15.65,
        date : new Date('2024-10-2'),
    },
    {
        id: 'e5',
        description: "Dinner at burger kings",
        amount: 50.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e6 ',
        description: "Hair cut at tams place ",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e7',
        description: "Hair cut at tams place ",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e8 ',
        description: "Hair cut at tams place ",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e9',
        description: "Hair cut at tams place ",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e10',
        description: "Hair cut at tams place ",
        amount: '25.65',
        date : new Date('2024-10-1'),
    },
    {
        id: 'e11',
        description: "Hair cut at tams place ",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
    {
        id: 'e12',
        description: "Hair cut at tams place",
        amount: 25.65,
        date : new Date('2024-10-1'),
    },
]
const ExpensesOutput = ({expenses, ExpensesPeriod}) => {
  return (
    <View style={styles.container}>
{/* summary */}
<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={ExpensesPeriod}/>

{/* list of expenses */}
<ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding:24,
        flex:1,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})