import React from "react";
import { 
  View, Text, TouchableOpacity, FlatList, Image, StyleSheet 
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; 

const favoriteItems = [
  {
    id: "1",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
  {
    id: "2",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
  {
    id: "3",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
  {
    id: "4",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
  {
    id: "5",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
  {
    id: "6",
    name: "Burger Bistro",
    location: "Rose Garden",
    price: "₹40",
    rating: "5.0 Rating",
    image: "https://source.unsplash.com/200x200/?burger", 
  },
];

const FavScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} 
      >
        <Ionicons name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Fav</Text>

      {/* Grid List */}
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <View style={styles.footer}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <MaterialIcons name="add" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10, 
    zIndex: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "orangered",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 8,
    flex: 1,

    // Shadow for iOS
    shadowColor: "#96969A",
    shadowOffset: { width: 13.65, height: 13.65 },
    shadowOpacity: 0.25, 
    shadowRadius: 34.12,

    // Shadow for Android
    elevation: 10, 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  location: {
    fontSize: 12,
    color: "#888",
  },
  rating: {
    fontSize: 12,
    color: "#666",
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "orangered",
    padding: 6,
    borderRadius: 20,
  },
});

export default FavScreen;
