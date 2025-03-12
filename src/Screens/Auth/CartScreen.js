import React from "react"; 
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // ✅ Import useNavigation

const cartItems = [
  { id: "1", title: "Added Items" },
  { id: "2", title: "Ongoing Orders" },
  { id: "3", title: "Order History" },
];

const CartScreen = () => {
  const navigation = useNavigation(); // ✅ Initialize navigation

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Cart</Text>

      {/* List of Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.row}>
              <Ionicons name="person-outline" size={20} color="orangered" style={styles.icon} />
              <Text style={styles.itemText}>{item.title}</Text>
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
    padding: 10, // ✅ Added padding for better touch response
    zIndex: 10, // ✅ Ensures it is clickable above other elements
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "orangered",
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#F5F7FA",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default CartScreen;
