import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const MainScreen = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false, groupIndex:0 },
    { id: 2, label: 'Checkbox 2', checked: false, groupIndex:0 },
    { id: 3, label: 'Checkbox 3', checked: false, groupIndex:0 },
    { id: 4, label: 'Checkbox 4', checked: false, groupIndex:0 },
    { id: 5, label: 'Checkbox 5', checked: false, groupIndex:0 },
    { id: 6, label: 'Checkbox 6', checked: false, groupIndex:0 },
    { id: 7, label: 'Checkbox 7', checked: false, groupIndex:0 },
    { id: 8, label: 'Checkbox 8', checked: false, groupIndex:0 },
    { id: 9, label: 'Checkbox 9', checked: false, groupIndex:0 },
    { id: 10, label: 'Checkbox 10', checked: false, groupIndex:0 },
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
 <View style={styles.availableProductsCard}>
<Text style={styles.availableProductsText}>Available Products</Text>
 <View style={styles.group0}>
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

      </View>

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
    },
    availableProductsCard:{
      borderWidth:1,
      padding:10,
      borderColor:'#d5d5d5',
      backgroundColor:'white' 
    },
    availableProductsText:{
      textAlign:'center',
      fontWeight:'500',
      padding:10,
      color:'green'
    },
    group0:{
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-between',
    },
})