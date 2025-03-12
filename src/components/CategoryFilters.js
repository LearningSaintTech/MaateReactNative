import React, { useState } from "react"; 
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const categories = [
  { name: "Meals", image: require("../assets/images/category.png") },
  { name: "Snacks", image: require("../assets/images/category.png") },
  { name: "Desserts", image: require("../assets/images/category.png") },
  { name: "Beverages", image: require("../assets/images/category.png") },
];

const CategoryFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState("Meals");

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.card,
            selectedCategory === category.name ? styles.activeCard : styles.inactiveCard,
          ]}
          onPress={() => setSelectedCategory(category.name)}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === category.name ? styles.activeText : styles.inactiveText,
            ]}
          >
            {category.name}
          </Text>
          <Image source={category.image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  card: {
    width: "48%", 
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  activeCard: {
    backgroundColor: "#FF3D00",
  },
  inactiveCard: {
    borderWidth: 2,
    borderColor: "#FF3D00",
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeText: {
    color: "#FFF",
  },
  inactiveText: {
    color: "#FF3D00",
  },
  image: {
    top:8,
   left:11,
    height: 40, 
    borderRadius: 10,
    resizeMode: "cover", 
  },
});

export default CategoryFilters;
