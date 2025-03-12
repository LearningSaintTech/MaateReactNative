// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { 
//   View, Text, TextInput, TouchableOpacity, StyleSheet 
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const AddAddressScreen = () => {
//   const navigation=useNavigation();
//   const [selectedLabel, setSelectedLabel] = useState("Home");

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="orangered" />
//       </TouchableOpacity>

//       {/* Header */}
//       <Text style={styles.headerText}>Add Address</Text>

//       {/* Input Fields with Labels */}
//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Building NO.</Text>
//         <TextInput style={styles.input} placeholder="123A" />
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Street/Area</Text>
//         <TextInput style={styles.input} placeholder="Downtown Street" />
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Address</Text>
//         <TextInput style={styles.input} placeholder="2464 Royal Ln, Mesa" />
//       </View>

//       {/* Street & Post Code */}
//       <View style={styles.row}>
//         <View style={[styles.inputGroup, styles.halfWidth]}>
//           <Text style={styles.label}>Street</Text>
//           <TextInput style={styles.input} placeholder="5th Avenue" />
//         </View>
//         <View style={[styles.inputGroup, styles.halfWidth]}>
//           <Text style={styles.label}>Post code</Text>
//           <TextInput style={styles.input} placeholder="123456" keyboardType="numeric" />
//         </View>
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Mobile Number</Text>
//         <TextInput style={styles.input} placeholder="+91 9876543210" keyboardType="phone-pad" />
//       </View>

//       {/* Label as */}
//       <Text style={styles.label}>Label as</Text>
//       <View style={styles.labelContainer}>
//         {["Home", "Work", "Other"].map((label) => (
//           <TouchableOpacity
//             key={label}
//             style={[
//               styles.labelButton,
//               selectedLabel === label && styles.selectedLabel,
//             ]}
//             onPress={() => setSelectedLabel(label)}
//           >
//             <Text style={[
//               styles.labelTextStyle,
//               selectedLabel === label && styles.selectedLabelText,
//             ]}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Save Location Button */}
//       <TouchableOpacity style={styles.saveButton}>
//         <Text style={styles.saveButtonText}>Save Location</Text>
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
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "orangered",
//     marginBottom: 20,
//   },
//   inputGroup: {
//     marginBottom: 12,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 14,
//     backgroundColor: "#fff",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   halfWidth: {
//     width: "48%",
//   },
//   labelContainer: {
//     flexDirection: "row",
//     marginTop: 10,
//   },
//   labelButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   selectedLabel: {
//     backgroundColor: "orangered",
//     borderColor: "orangered",
//   },
//   labelTextStyle: {
//     fontSize: 14,
//     color: "#333",
//   },
//   selectedLabelText: {
//     color: "#fff",
//   },
//   saveButton: {
//     backgroundColor: "orangered",
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 120,
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default AddAddressScreen;


import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet 
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // ✅ Import useNavigation

const AddAddressScreen = () => {
  const navigation = useNavigation(); // ✅ Initialize navigation
  const [selectedLabel, setSelectedLabel] = useState("Home");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // ✅ Navigates back
      >
        <Ionicons name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Add Address</Text>

      {/* Input Fields with Labels */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Building NO.</Text>
        <TextInput style={styles.input} placeholder="123A" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Street/Area</Text>
        <TextInput style={styles.input} placeholder="Downtown Street" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="2464 Royal Ln, Mesa" />
      </View>

      {/* Street & Post Code */}
      <View style={styles.row}>
        <View style={[styles.inputGroup, styles.halfWidth]}>
          <Text style={styles.label}>Street</Text>
          <TextInput style={styles.input} placeholder="5th Avenue" />
        </View>
        <View style={[styles.inputGroup, styles.halfWidth]}>
          <Text style={styles.label}>Post code</Text>
          <TextInput style={styles.input} placeholder="123456" keyboardType="numeric" />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput style={styles.input} placeholder="+91 9876543210" keyboardType="phone-pad" />
      </View>

      {/* Label as */}
      <Text style={styles.label}>Label as</Text>
      <View style={styles.labelContainer}>
        {["Home", "Work", "Other"].map((label) => (
          <TouchableOpacity
            key={label}
            style={[
              styles.labelButton,
              selectedLabel === label && styles.selectedLabel,
            ]}
            onPress={() => setSelectedLabel(label)}
          >
            <Text style={[
              styles.labelTextStyle,
              selectedLabel === label && styles.selectedLabelText,
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Save Location Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Location</Text>
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
    padding: 10, // ✅ Added padding to make it more clickable
    zIndex: 10, // ✅ Ensure it's above other elements
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "orangered",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
  labelContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  labelButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    marginRight: 10,
  },
  selectedLabel: {
    backgroundColor: "orangered",
    borderColor: "orangered",
  },
  labelTextStyle: {
    fontSize: 14,
    color: "#333",
  },
  selectedLabelText: {
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "orangered",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 120,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddAddressScreen;
