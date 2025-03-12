
// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import Icon from "react-native-vector-icons/Feather";

// const Profile = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.profileHeader}>
//         <Image
//           source={{ uri: "https://via.placeholder.com/80" }}
//           style={styles.profileImage}
//         />
//         <View style={styles.profileInfo}>
//           <Text style={styles.profileName}>Aditya Raj</Text>
//           <Text style={styles.profileLocation}>
//             <Icon name="map-pin" size={14} color="red" /> H-70, Sector 63, Noida
            
//           </Text>
//         </View>
//         <View style={styles.balanceContainer}>
//           <Text style={styles.balanceLabel}>Remaining Amount</Text>
//           <Text style={styles.balance}>₹2500.00</Text>
//         </View>
//       </View>

//       <ScrollView>
//         <View style={styles.menuContainer}>
//           <MenuItem icon="user" text="Personal Info" />
//           <MenuItem icon="map" text="Addresses" />
//         </View>

//         <View style={styles.menuContainer}>
//           <MenuItem icon="shopping-cart" text="Cart" />
//           <MenuItem icon="heart" text="Favourite" />
//           <MenuItem icon="bell" text="Notifications" />
//           <MenuItem icon="credit-card" text="Payment Method" />
//           <MenuItem icon="database" text="Subscription" />
//         </View>

//         <View style={styles.menuContainer}>
//           <MenuItem icon="help-circle" text="FAQs" />
//           <MenuItem icon="message-circle" text="User Reviews" />
//         </View>
//       </ScrollView>

//     </View>
//   );
// };

// const MenuItem = ({ icon, text }) => (
//   <TouchableOpacity style={styles.menuItem}>
//     <Icon name={icon} size={22} color="#555" />
//     <Text style={styles.menuText}>{text}</Text>
//     <Icon name="chevron-right" size={20} color="#ccc" />
//   </TouchableOpacity>
// );

// const NavItem = ({ icon, active }) => (
//   <TouchableOpacity style={styles.navItem}>
//     <Icon name={icon} size={24} color={active ? "red" : "#999"} />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   profileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#000",
//     paddingHorizontal: 10,
//     paddingVertical:25,
//     borderRadius: 18,
//     margin: 20,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: "gold",
//   },
//   profileInfo: {
//     flex: 1,
//     marginLeft: 8,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   profileLocation: {
//     fontSize: 14,
//     color: "#ccc",
//     marginTop: 3,
//   },
//   balanceContainer: {
//     alignItems: "center",
//     backgroundColor: "rgba(255,255,255,0.1)",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#fff",
//   },
//   balanceLabel: {
//     fontSize: 12,
//     color: "#ccc",
//   },
//   balance: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   menuContainer: {
//     backgroundColor: "#F6F8FA",
//     margin: 10,
//     borderRadius: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//     marginLeft: 10,
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#eee",
//   },
//   navItem: {
//     padding: 10,
//   },
// });

// export default Profile;


import React from "react"; 
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native"; 

const Profile = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Aditya Raj</Text>
          <Text style={styles.profileLocation}>
            <Icon name="map-pin" size={14} color="red" /> H-70, Sector 63, Noida
          </Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Remaining Amount</Text>
          <Text style={styles.balance}>₹2500.00</Text>
        </View>
      </View>

    
      <ScrollView>
        <View style={styles.menuContainer}>
          <MenuItem icon="user" text="Personal Info" screen="ProfileInfo" navigation={navigation} />
          <MenuItem icon="map" text="Addresses" screen="Address" navigation={navigation} />
        </View>

        <View style={styles.menuContainer}>
          <MenuItem icon="shopping-cart" text="Cart" screen="Cart" navigation={navigation} />
          <MenuItem icon="heart" text="Favourite" screen="Fav" navigation={navigation} />
          <MenuItem icon="bell" text="Notifications" screen="Notification" navigation={navigation} />
          <MenuItem icon="credit-card" text="Payment Method"  navigation={navigation} />
          <MenuItem icon="database" text="Subscription"  navigation={navigation} />
        </View>

        <View style={styles.menuContainer}>
          <MenuItem icon="help-circle" text="FAQs" screen="FAQs" navigation={navigation} />
          <MenuItem icon="message-circle" text="User Reviews" screen="UserReviews" navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ icon, text, screen, navigation }) => (
  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(screen)}>
    <Icon name={icon} size={22} color="#555" />
    <Text style={styles.menuText}>{text}</Text>
    <Icon name="chevron-right" size={20} color="#ccc" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  profileLocation: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 3,
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
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default Profile;
