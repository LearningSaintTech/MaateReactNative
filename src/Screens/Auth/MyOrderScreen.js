// import React from "react";
// import {
//   ScrollView,
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList
// } from "react-native";
// import HeaderSection from "../../components/HeaderSection";
// import BottomTabBar from "../../components/BottomTabBar";
// import { MaterialIcons } from "@expo/vector-icons"; // Importing star icon

// const orders = [
//   {
//     id: "1",
//     name: "Burger Bistro",
//     location: "Rose garden",
//     price: "50",
//     originalPrice: "99", // Original price before discount
//     image: require("../../assets/images/Burger.png"),
//   },
//   {
//     id: "2",
//     name: "Burger Bistro",
//     location: "Rose garden",
//     price: "50",
//     originalPrice: "99",
//     image: require("../../assets/images/Banner1.png"),
//   },
//   {
//     id: "3",
//     name: "Burger Bistro",
//     location: "Rose garden",
//     price: "50",
//     originalPrice: "99",
//     image: require("../../assets/images/Banner2.png"),
//   },
//   {
//     id: "4",
//     name: "Burger Bistro",
//     location: "Rose garden",
//     price: "50",
//     originalPrice: "99",
//     image: require("../../assets/images/Banner3.png"),
//   },
//   {
//     id: "5",
//     name: "Burger Bistro",
//     location: "Rose garden",
//     price: "50",
//     originalPrice: "99",
//     image: require("../../assets/images/Banner4.png"),
//   },
// ];

// const MyOrderScreen = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <HeaderSection />

//         {/* My Orders Button */}
//         <TouchableOpacity style={styles.orderButton}>
//           <Text style={styles.buttonText}>My Orders</Text>
//         </TouchableOpacity>

//         {/* Orders List */}
//         <View style={styles.orderContainer}>
//           <FlatList
//             data={orders}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.orderItem}>
//                 <Image source={item.image} style={styles.image} />
//                 <View style={styles.orderDetails}>
//                   <Text style={styles.orderName}>{item.name}</Text>
//                   <Text style={styles.orderLocation}>{item.location}</Text>

//                   {/* Price Section */}
//                   <View style={styles.priceContainer}>
//                     <Text style={styles.orderPrice}>₹{item.price}</Text>
//                     <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
//                   </View>

//                   {/* Star Rating */}
//                   <View style={styles.ratingContainer}>
//                     <MaterialIcons name="star" size={16} color="#FFD700" />
//                     <Text style={styles.ratingText}> 5.0 Rating</Text>
//                   </View>
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//       </ScrollView>
//       <BottomTabBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   orderButton: {
//     marginTop: 20,
//     alignSelf: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderWidth: 2,
//     borderColor: "#ff6600",
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: "#ff6600",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   orderContainer: {
//     marginTop: 20,
//     marginHorizontal: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 5,
//   },
//   orderItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   orderDetails: {
//     flex: 1,
//   },
//   orderName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#ff6600",
//   },
//   orderLocation: {
//     fontSize: 14,
//     color: "#777",
//   },
//   priceContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   orderPrice: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   originalPrice: {
//     fontSize: 14,
//     color: "#999",
//     textDecorationLine: "line-through",
//     marginLeft: 8,
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: "#777",
//   },
// });

// export default MyOrderScreen;


import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import HeaderSection from "../../components/HeaderSection";
import BottomTabBar from "../../components/BottomTabBar";
import Icon from "react-native-vector-icons/MaterialIcons"; // Using react-native-vector-icons

const orders = [
  {
    id: "1",
    name: "Burger Bistro",
    location: "Rose garden",
    price: "50",
    originalPrice: "99",
    image: require("../../assets/images/Burger.png"),
  },
  {
    id: "2",
    name: "Burger Bistro",
    location: "Rose garden",
    price: "50",
    originalPrice: "99",
    image: require("../../assets/images/Banner1.png"),
  },
  {
    id: "3",
    name: "Burger Bistro",
    location: "Rose garden",
    price: "50",
    originalPrice: "99",
    image: require("../../assets/images/Banner2.png"),
  },
  {
    id: "4",
    name: "Burger Bistro",
    location: "Rose garden",
    price: "50",
    originalPrice: "99",
    image: require("../../assets/images/Banner3.png"),
  },
  {
    id: "5",
    name: "Burger Bistro",
    location: "Rose garden",
    price: "50",
    originalPrice: "99",
    image: require("../../assets/images/Banner4.png"),
  },
];

const MyOrderScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection />

        {/* My Orders Button */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.buttonText}>My Orders</Text>
        </TouchableOpacity>

        {/* Orders List */}
        <View style={styles.orderContainer}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.orderItem}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.orderDetails}>
                  <Text style={styles.orderName}>{item.name}</Text>
                  <Text style={styles.orderLocation}>{item.location}</Text>

                  {/* Price Section */}
                  <View style={styles.priceContainer}>
                    <Text style={styles.orderPrice}>₹{item.price}</Text>
                    <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
                  </View>

                  {/* Star Rating */}
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}> 5.0 Rating</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <BottomTabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  orderButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: "#ff6600",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ff6600",
    fontSize: 16,
    fontWeight: "bold",
  },
  orderContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff6600",
  },
  orderLocation: {
    fontSize: 14,
    color: "#777",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#777",
  },
});

export default MyOrderScreen;
