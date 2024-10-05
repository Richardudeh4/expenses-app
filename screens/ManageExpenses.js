import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import {Ionicons} from "@expo/vector-icons"
import { GlobalStyles } from '../constants/styles'
import DateTimePicker from '@react-native-community/datetimepicker';

const ManageExpenses = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setFormattedDate(currentDate.toLocaleDateString());
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
   <View>
    <Text>Enter new expense</Text>
    <TextInput style={styles.textInput} placeholder='Enter expenses'/>
    <View style={styles.amountContainer}>
      <Ionicons name="cash" size={27} color="white" style={styles.icon}/>
    <TextInput style={[styles.textInput,styles.amountInput]} placeholder='Enter ammount' keyboardType="numeric"/>
    </View>
    <TextInput 
    style={styles.textInput} 
    placeholder='Add Date'  
    value={formattedDate}
    onFocus={showDatePicker}
    editable={false}
    />
     {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
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