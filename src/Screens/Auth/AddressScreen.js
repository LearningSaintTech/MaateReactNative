// import React from "react"; 
// import { 
//   View, Text, TouchableOpacity, FlatList, StyleSheet 
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native"; 
// const addresses = [
//   {
//     id: "1",
//     type: "HOME",
//     icon: "home",
//     iconColor: "blue",
//     address: "2464 Royal Ln. Mesa, New Jersey 45463",
//   },
//   {
//     id: "2",
//     type: "WORK",
//     icon: "work",
//     iconColor: "purple",
//     address: "3891 Ranchview Dr. Richardson, California 62639",
//   },
// ];

// const AddressScreen = () => {
//   const navigation = useNavigation(); 

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="orangered" />
//       </TouchableOpacity>

//       {/* Header */}
//       <Text style={styles.headerText}>My Address</Text>

//       {/* Address List */}
//       <FlatList
//         data={addresses}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.addressCard}>
//             {/* Left Section: Icon & Address Details */}
//             <View style={styles.addressDetails}>
//               <View style={[styles.iconContainer, { backgroundColor: `${item.iconColor}20` }]}>
//                 <Ionicons name={item.icon} size={22} color={item.iconColor} />
//               </View>
//               <View style={styles.textContainer}>
//                 <Text style={styles.addressType}>{item.type}</Text>
//                 <Text style={styles.addressText}>{item.address}</Text>
//               </View>
//             </View>

//             {/* Edit and Delete Buttons */}
//             <View style={styles.actionIcons}>
//               <TouchableOpacity>
//                 <MaterialIcons name="edit" size={20} color="orangered" />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ marginLeft: 10 }}>
//                 <MaterialIcons name="delete" size={20} color="orangered" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />

//       {/* Add New Address Button */}
//       <TouchableOpacity 
//         style={styles.addButton} 
//         onPress={() => navigation.navigate("AddAddress")} 
//       >
//         <Text style={styles.addButtonText}>Add New Address</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   backButton: {
//     position: "absolute",
//     top: 10,
//     left: 10,
//     padding: 10, 
//     zIndex: 10,  
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "orangered",
//     marginBottom: 20,
//   },
//   addressCard: {
//     backgroundColor: "#F0F5FA",
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     marginBottom: 15,
//   },
//   addressDetails: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   iconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   addressType: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   addressText: {
//     fontSize: 13,
//     color: "#666",
//     marginTop: 2,
//   },
//   actionIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-start",
//     marginTop: 2,
//   },
//   addButton: {
//     backgroundColor: "orangered",
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: "auto",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default AddressScreen;


import React from "react"; 
import { 
  View, Text, TouchableOpacity, FlatList, StyleSheet, Image 
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; 
import workImage from "../../assets/images/work.png"; 

const addresses = [
  {
    id: "1",
    type: "HOME",
    icon: "home",
    iconColor: "blue",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
  {
    id: "2",
    type: "WORK",
    icon: "work",
    iconColor: "purple",
    address: "3891 Ranchview Dr. Richardson, California 62639",
  },
];

const AddressScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>My Address</Text>

      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addressCard}>
            {/* Left Section: Icon/Image & Address Details */}
            <View style={styles.addressDetails}>
              <View style={[styles.iconContainer, { backgroundColor: `${item.iconColor}20` }]}>
                {item.type === "WORK" ? (
                  <Image source={workImage} style={styles.workImage} />
                ) : (
                  <Ionicons name={item.icon} size={22} color={item.iconColor} />
                )}
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.addressType}>{item.type}</Text>
                <Text style={styles.addressText}>{item.address}</Text>
              </View>
            </View>

            {/* Edit and Delete Buttons */}
            <View style={styles.actionIcons}>
              <TouchableOpacity>
                <MaterialIcons name="edit" size={20} color="orangered" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <MaterialIcons name="delete" size={20} color="orangered" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Add New Address Button */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate("AddAddress")} 
      >
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>
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
  addressCard: {
    backgroundColor: "#F0F5FA",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  addressDetails: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  workImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  addressType: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  addressText: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  actionIcons: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
  },
  addButton: {
    backgroundColor: "orangered",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddressScreen;
