import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform,Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const HeaderSection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.locationIconContainer}>
       
          <Image source={require("../assets/images/location.png")} style={styles.locationImage} />
        </View>
        <View>
          <Text style={styles.greeting}>Hello Brandon!</Text>
          <Text style={styles.location}>H-70, Sector 63, Noida</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.notificationContainer}>
        <Icon name="notifications-outline" size={24} color="black" />
        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  locationImage: {
    width: 22, 
    height: 22,
    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 50 : 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
    // elevation: 5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF0E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FF3D00",
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF3D00",
  },
  location: {
    fontSize: 14,
    color: "#777",
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,  
    borderColor: "black", 
  },
  notificationDot: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
});


export default HeaderSection;
