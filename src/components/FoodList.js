import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import FoodCard from "../components/FoodCard";

const foodItems = [
  { name: "Burger Bistro", location: "Rose Garden" },
  { name: "Pizza Hub", location: "Downtown" },
  { name: "Cheese Delight", location: "Food Street" },
  { name: "Tandoori Feast", location: "Market Plaza" },
];
const FoodList = () => {
  return (
    <FlatList
      data={foodItems}
      renderItem={({ item }) => <FoodCard item={item} />} 
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default FoodList;
