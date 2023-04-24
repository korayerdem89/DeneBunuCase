import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const MainScreen = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false },
    { id: 2, label: 'Checkbox 2', checked: false },
    { id: 3, label: 'Checkbox 3', checked: false },
    { id: 4, label: 'Checkbox 4', checked: false },
    { id: 5, label: 'Checkbox 5', checked: false },
    { id: 6, label: 'Checkbox 6', checked: false },
    { id: 7, label: 'Checkbox 7', checked: false },
    { id: 8, label: 'Checkbox 8', checked: false },
    { id: 9, label: 'Checkbox 9', checked: false },
    { id: 10, label: 'Checkbox 10', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <View style={styles.container}>
      {checkboxes.map((checkbox) => (
        <View style={styles.checkBoxContainer} key={checkbox.id}>
          <Checkbox
            value={checkbox.checked}
            onValueChange={() => handleCheckboxChange(checkbox.id)}
          />
          <Text style={styles.checkboxText}>{checkbox.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    checkBoxContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    checkboxText:{
        marginLeft:5,
        marginVertical:5
    }
})