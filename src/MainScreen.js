import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";

const MainScreen = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false, groupIndex: 0 },
    { id: 2, label: "Checkbox 2", checked: false, groupIndex: 0 },
    { id: 3, label: "Checkbox 3", checked: false, groupIndex: 0 },
    { id: 4, label: "Checkbox 4", checked: false, groupIndex: 0 },
    { id: 5, label: "Checkbox 5", checked: false, groupIndex: 0 },
    { id: 6, label: "Checkbox 6", checked: false, groupIndex: 0 },
    { id: 7, label: "Checkbox 7", checked: false, groupIndex: 0 },
    { id: 8, label: "Checkbox 8", checked: false, groupIndex: 0 },
    { id: 9, label: "Checkbox 9", checked: false, groupIndex: 0 },
    { id: 10, label: "Checkbox 10", checked: false, groupIndex: 0 },
  ]);

  const [categoryCards, setCategoryCards] = useState(["1"]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  const handleAddCategory = () => {
    setCategoryCards([...categoryCards, categoryCards.length + 1]);
  };

  const handleRemoveCategory = () => {
    categoryCards.pop();
    setCategoryCards([...categoryCards]);
  };

  const handleAddProduct = (value) => {
    const filteredCheckboxes = checkboxes.filter(
      (checkbox) => checkbox.checked
    );
    const newCheckBoxes = checkboxes.filter((checkbox) => !checkbox.checked);
    const updatedCheckBox = filteredCheckboxes.map((item) => ({
      ...item,
      checked: false,
      groupIndex: value,
    }));
    setCheckboxes((checkbox) => [...newCheckBoxes, ...updatedCheckBox]);
  };

  const FilteredCheckboxes = ({ value }) => {
    return checkboxes
      .filter((item) => item.groupIndex === value)
      .map((checkbox) => (
        <View style={styles.checkBoxContainer} key={checkbox.id}>
          <Checkbox
            value={checkbox.checked}
            onValueChange={() => handleCheckboxChange(checkbox.id)}
          />
          <Text style={styles.checkboxText}>{checkbox.label}</Text>
        </View>
      ));
  };

  const CategoryCard = ({ value }) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <Text>Category {value}</Text>
        <View
          style={{ height: 70, alignItems: "center", justifyContent: "center" }}
        >
          <FilteredCheckboxes value={value} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "45%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => handleAddProduct(value)}>
              <Text
                style={{
                  padding: 5,
                  backgroundColor: "gray",
                  color: "white",
                  fontSize: 10,
                }}
              >
                Add Product
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  padding: 5,
                  backgroundColor: "gray",
                  color: "white",
                  fontSize: 10,
                }}
              >
                Remove Product
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleRemoveCategory}>
            <Text
              style={{
                padding: 5,
                backgroundColor: "gray",
                color: "white",
                fontSize: 10,
              }}
            >
              Remove Category
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewCard}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "500",
            color: "green",
            marginVertical: 5,
          }}
        >
          Review
        </Text>
        <Text>Available Products: {null}</Text>
        <Text>Categories: {null} </Text>
        <Text>
          Category {null}: {null} products{" "}
        </Text>
      </View>
      <View style={styles.availableProductsCard}>
        <Text style={styles.availableProductsText}>Available Products</Text>
        <View style={styles.group0}>
          <FilteredCheckboxes value={0} />
        </View>
      </View>
      <View style={styles.categoryCards}>
        <ScrollView>
          {categoryCards.map((item, index) => (
            <View
              style={{
                marginVertical: 5,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
              }}
              key={item}
            >
              <CategoryCard value={index + 1} />
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={handleAddCategory}>
        <View
          style={{
            alignItems: "center",
            padding: 5,
            backgroundColor: "blue",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Add Category</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: 5,
    marginVertical: 5,
  },
  availableProductsCard: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#d5d5d5",
    backgroundColor: "white",
  },
  availableProductsText: {
    textAlign: "center",
    fontWeight: "500",
    padding: 10,
    color: "green",
  },
  group0: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryCards: {
    marginVertical: 10,
    height: 300,
  },
  reviewCard: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 10,
    height: 150,
  },
});
