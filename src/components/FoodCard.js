
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const FoodCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("FoodDetail")}>
      <Image source={require("../assets/images/Burger.png")} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>

        <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="#FFC107" />
          <Text style={styles.rating}> 5.0 Rating</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>₹40</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%", 
    backgroundColor: "#FFF",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: "#888",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FF3D00",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FoodCard;
