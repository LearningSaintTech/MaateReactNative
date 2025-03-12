import React from "react";
import { 
  View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions 
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const offers = [
  { id: "1", image: require("../../assets/images/Banner1.png") },
  { id: "2", image: require("../../assets/images/Banner2.png") },
  { id: "3", image: require("../../assets/images/Banner3.png") },
  { id: "4", image: require("../../assets/images/Banner4.png") },
];

const OfferScreen = () => {
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
      <Text style={styles.headerText}>Offers</Text>

      {/* Offers List */}
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
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
    paddingHorizontal: width * 0.05, 
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10, // ✅ Ensure it's easily clickable
    zIndex: 10, // ✅ Ensure it's above other elements
  },
  headerText: {
    fontSize: width * 0.06, // ✅ Scalable font size
    fontWeight: "bold",
    textAlign: "center",
    color: "orangered",
    marginVertical: width * 0.08,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: width * 0.05,
    alignSelf: "center",
  },
  image: {
    width: width * 0.9, // ✅ Responsive width
    height: width * 0.4, // ✅ Maintain aspect ratio
    borderRadius: 15,
  },
});

export default OfferScreen;
