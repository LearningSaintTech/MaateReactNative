import React from "react"; 
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const Profile = () => {
  const navigation = useNavigation(); 
  return ( 
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Aditya Raj</Text>
          <View style={styles.locationContainer}>
            <Image source={require("../../assets/images/location.png")} style={styles.smallIcon} />
            <Text style={styles.profileLocation}>H-70, Sector 63, Noida</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Remaining Amount</Text>
          <Text style={styles.balance}>₹2500.00</Text>
        </View>
      </View>

      <ScrollView>
        {/* First Section */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("ProfileInfo")}>
            <Image source={require("../../assets/icons/personal.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Personal Info</Text>
            <Image source={require("../../assets/icons/arrow.png")} style={styles.chevronIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Address")}>
            <Image source={require("../../assets/icons/address.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Addresses</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>
        {/* Second Section */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../../assets/icons/cart.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Cart</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Fav")}>
            <Image source={require("../../assets/icons/favorite.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Favourite</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Notification")}>
            <Image source={require("../../assets/icons/notification.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>Notifications</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>

        {/* Third Section */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("FAQs")}>
            <Image source={require("../../assets/icons/faq.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>FAQs</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("UserReviews")}>
            <Image source={require("../../assets/icons/reviews.png")} style={styles.menuIcon} />
            <Text style={styles.menuText}>User Reviews</Text>
            <Image source={require("../../assets/icons/arrow.png")}style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10, 
    zIndex: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 18,
    margin: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "gold",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  profileLocation: {
    fontSize: 14,
    color: "#ccc",
    marginLeft: 5,
  },
  balanceContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  balanceLabel: {
    fontSize: 12,
    color: "#ccc",
  },
  balance: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  menuContainer: {
    backgroundColor: "#F6F8FA",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  chevronIcon: {
    width: 20,
    height: 20,
    tintColor: "#ccc",
    resizeMode: "contain",
  },
  smallIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
});

export default Profile;
