import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Ionicons} from "@expo/vector-icons"
import { GlobalStyles } from '../constants/styles'
import DateTimePicker from '@react-native-community/datetimepicker';

const ManageExpenses = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios'); 
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
// use state for input element
const [textInput, setTextInput] = useState('');
useEffect(() => {
setTextInput(textInput);
}, [textInput])
// use state for the ammount entered 
const [amount, setAmount] = useState('');
useEffect(() => {
setAmount(amount)
}, [amount])
// console log for the amount


  const showDatePicker = () => {
    setShow(true);
  };

  const submitExpenses = () => {

  }
  console.log(textInput);
  return (
    <View style={styles.container}>
   <View>
    <Text style={{fontSize: 20, fontWeight:"bold", color: 'white', paddingTop:8, paddingLeft: 12}}>Enter new expense</Text>
    <TextInput
     style={styles.textInput}
      value={textInput} 
      onChangeText={setTextInput} 
      placeholder='Enter expenses'/>
    <View style={styles.amountContainer}>
      <Ionicons name="cash" size={27} color="white" style={styles.icon}/>
    <TextInput 
    style={[styles.textInput,styles.amountInput]}
    value={amount}
    onChangeText={setAmount}
     placeholder='Enter ammount' 
     keyboardType="numeric"/>
    </View>
    <Button onPress={showDatepicker} title="Show Date Picker" />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
        <Button title='Add expenses'
         color={GlobalStyles.colors.gray700} 
         onPress={submitExpenses}
        accessibilityLabel="Learn more about this purple button"
         />
   </View>
    </View>
  )
}


export default ManageExpenses

const styles = StyleSheet.create({
 container: {
  flex:1,
  backgroundColor: GlobalStyles.colors.primary400,
  flexDirection: "column",
  justifyContent:"space-between",

 },
 textInput: {
  height: 40,
  width:"auto",
  marginVertical: 12,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
  fontSize: 16,
  marginHorizontal:10,
 },
 amountContainer: {
  flexDirection: "row",
  gap:8,
  borderColor: '#ccc',
  alignItems:"center",
 },
 icon: {
  marginLeft: 10,
 },
 amountInput: {
  flex: 1,
  height: 40,
  fontSize: 16,
},
})