// import React, { useState,useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet 
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native"; 
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const PROFILE_URL = "http://192.168.1.26:8080/api/customer/profile";
// const EditProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState("John Smith");
//   const [email, setEmail] = useState("xyz@gmail.com");
//   const [phone, setPhone] = useState("+91");
//   const [about, setAbout] = useState("");
//     const [profile, setProfile] = useState(null);


//  useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem("accessToken");
//         if (!token) {
//           console.error("No token found");
//           return;
//         }

//         const response = await fetch(PROFILE_URL, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setProfile(data.data);
//         } else {
//           console.error("Error fetching profile:", data);
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//       }
//     };

//     fetchProfile();
//   }, []);


//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity 
//         style={styles.backButton} 
//         onPress={() => navigation.goBack()} 
//       >
//         <Ionicons name="arrow-back" size={24} color="orangered" />
//       </TouchableOpacity>

//       {/* Header */}
//       <Text style={styles.headerText}>Edit Info</Text>

//       {/* Profile Picture */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }}
//           style={styles.profileImage}
//         />
//         <TouchableOpacity style={styles.cameraButton}>
//           <MaterialIcons name="photo-camera" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//         />

//         <Text style={styles.label}>E-mail</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         {/* <Text style={styles.label}>Phone Number</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="phone-pad"
//           value={phone}
//           onChangeText={setPhone}
//         /> */}

//         {/* <Text style={styles.label}>About You</Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Write Here"
//           multiline
//           numberOfLines={4}
//           value={about}
//           onChangeText={setAbout}
//         /> */}
//       </View>

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton}>
//         <Text style={styles.saveButtonText}>Save</Text>
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
//     padding: 10, // ✅ Added padding to make it more clickable
//     zIndex: 10, // ✅ Ensure it's above other elements
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "orangered",
//     marginBottom: 20,
//   },
//   imageContainer: {
//     alignSelf: "center",
//     position: "relative",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 4,
//     borderColor: "orangered",
//   },
//   cameraButton: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     backgroundColor: "orangered",
//     borderRadius: 20,
//     padding: 6,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#555",
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   textArea: {
//     height: 80,
//     textAlignVertical: "top",
//   },
//   saveButton: {
//     backgroundColor: "orangered",
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: "auto",
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default EditProfileScreen;


// To update user data, dispatch an action from any screen.

// import { useDispatch } from "react-redux";
// import { setUser } from "../redux/userSlice";

// const dispatch = useDispatch();

// dispatch(setUser({
//   name: "Aditya Raj",
//   email: "aditya@example.com",
//   phone: "+91 9876543210",
//   profilePicture: "https://example.com/profile.jpg"
// }));




// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const PROFILE_URL = "http://192.168.1.26:8080/api/customer/profile";
// const EditProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState("User");
//   const [email, setEmail] = useState("");
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem("accessToken");
//         if (!token) {
//           console.error("No token found");
//           return;
//         }

//         const response = await fetch(PROFILE_URL, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setProfile(data.data);
//           setName(data.data.fullName || "User");
//           setEmail(data.data.email || "");
//         } else {
//           console.error("Error fetching profile:", data);
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="orangered" />
//       </TouchableOpacity>

//       {/* Header */}
//       <Text style={styles.headerText}>Edit Info</Text>

//       {/* Profile Picture */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: profile?.user?.imageUrl || "https://randomuser.me/api/portraits/men/10.jpg" }}
//           style={styles.profileImage}
//         />
//         <TouchableOpacity style={styles.cameraButton}>
//           <MaterialIcons name="photo-camera" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput style={styles.input} value={name} onChangeText={setName} />

//         <Text style={styles.label}>E-mail</Text>
//         <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />
//       </View>

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton}>
//         <Text style={styles.saveButtonText}>Save</Text>
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
//   imageContainer: {
//     alignSelf: "center",
//     position: "relative",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 4,
//     borderColor: "orangered",
//   },
//   cameraButton: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     backgroundColor: "orangered",
//     borderRadius: 20,
//     padding: 6,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#555",
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   saveButton: {
//     backgroundColor: "orangered",
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: "auto",
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default EditProfileScreen;



import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PROFILE_URL = "http://192.168.1.26:8080/api/customer/profile";
const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch(PROFILE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setProfile(data.data);
          setName(data.data.fullName || "User");
          setEmail(data.data.email || "");
        } else {
          console.error("Error fetching profile:", data);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        Alert.alert("Error", "No authentication token found.");
        return;
      }

      const response = await fetch(PROFILE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName: name,
          email: email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Profile updated successfully.", [
          { text: "OK", onPress: () => navigation.navigate('Profile') },
        ]);
      } else {
        Alert.alert("Error", data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Update Profile Error:", error);
      Alert.alert("Error", "Network request failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Edit Info</Text>

      {/* Profile Picture */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: profile?.user?.imageUrl || "https://randomuser.me/api/portraits/men/10.jpg" }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <MaterialIcons name="photo-camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  imageContainer: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "orangered",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "orangered",
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "orangered",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;

