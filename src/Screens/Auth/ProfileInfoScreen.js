
// import React from "react"; 
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import IonIcon from "react-native-vector-icons/Ionicons";
// import { useNavigation } from "@react-navigation/native";

// const ProfileInfoScreen = () => {
//   const navigation = useNavigation(); 
   
//   const handleEditProfile = () => {
//     navigation.navigate("EditProfile");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <IonIcon name="arrow-back" size={24} color="orangered" />
//       </TouchableOpacity>

//       {/* Header */}
//       <Text style={styles.headerText}>Personal Info</Text>

//       {/* Profile Card */}
//       <View style={styles.profileCard}>
//         <View style={styles.profileRow}>
//           <Image
//             source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
//             style={styles.avatar}
//           />
//           <View style={styles.profileInfo}>
//             <Text style={styles.profileName}>Aditya Raj</Text>
//             <View style={styles.locationRow}>
//               <IonIcon name="location-sharp" size={14} color="red" />
//               <Text style={styles.locationText}>H-70, Sector 63, Noida</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.amountBox}>
//           <Text style={styles.amountText}>Remaining Amount</Text>
//           <Text style={styles.amountValue}>₹2500.00</Text>
//         </View>
//       </View>

//       {/* User Details */}
//       <View style={styles.infoCard}>
//         <View style={styles.infoRow}>
//           <Icon name="person" size={20} color="orangered" style={styles.icon} />
//           <View style={styles.infoTextContainer}>
//             <Text style={styles.label}>Full Name</Text>
//             <Text style={styles.infoText}>Vishal Khadok</Text>
//           </View>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="email" size={20} color="blue" style={styles.icon} />
//           <View style={styles.infoTextContainer}>
//             <Text style={styles.label}>Email</Text>
//             <Text style={styles.infoText}>hello@halallab.co</Text>
//           </View>
//         </View>

//         <View style={styles.infoRow}>
//           <Icon name="phone" size={20} color="green" style={styles.icon} />
//           <View style={styles.infoTextContainer}>
//             <Text style={styles.label}>Phone Number</Text>
//             <Text style={styles.infoText}>408-841-0926</Text>
//           </View>
//         </View>
//       </View>

//       {/* Edit Profile Button */}
//       <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
//         <Text style={styles.editButtonText}>Edit Profile</Text>
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
//   profileCard: {
//     backgroundColor: "#000",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   profileRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: "gold",
//   },
//   profileInfo: {
//     marginLeft: 10,
//   },
//   profileName: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   locationRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 2,
//   },
//   locationText: {
//     color: "#ccc",
//     marginLeft: 5,
//   },
//   amountBox: {
//     backgroundColor: "#222",
//     padding: 10,
//     borderRadius: 5,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderColor: "gray",
//     borderWidth: 1,
//     marginTop: 10,
//   },
//   amountText: {
//     color: "#bbb",
//     fontSize: 14,
//   },
//   amountValue: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   infoCard: {
//     backgroundColor: "#F6F8FA",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   infoTextContainer: {
//     marginLeft: 10,
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//   },
//   infoText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   editButton: {
//     backgroundColor: "orangered",
//     paddingVertical: 18,
//     borderRadius: 18,
//     alignItems: "center",
//     marginTop: "auto",
//   },
//   editButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   icon: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 16,
//   },
// });
// export default ProfileInfoScreen;

import React, { useState, useEffect } from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PROFILE_URL = "http://192.168.1.26:8080/api/customer/profile";

const ProfileInfoScreen = () => {
  const navigation = useNavigation(); 
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
        } else {
          console.error("Error fetching profile:", data);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <IonIcon name="arrow-back" size={24} color="orangered" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Personal Info</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: profile?.user?.imageUrl || "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profile?.fullName || "USER"}</Text>
            <View style={styles.locationRow}>
              <IonIcon name="location-sharp" size={14} color="red" />
              <Text style={styles.locationText}>{profile?.latitude && profile?.longitude ? `Lat: ${profile.latitude}, Long: ${profile.longitude}` : "Location Not Available"}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* User Details */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Icon name="person" size={20} color="orangered" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.infoText}>{profile?.fullName || "USER"}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="email" size={20} color="blue" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.infoText}>{profile?.email || "N/A"}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="phone" size={20} color="green" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.infoText}>{profile?.mobileNumber || "N/A"}</Text>
          </View>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
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
  profileCard: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "gold",
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  locationText: {
    color: "#ccc",
    marginLeft: 5,
  },
  infoCard: {
    backgroundColor: "#F6F8FA",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoTextContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "orangered",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: "auto",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 16,
  },
});

export default ProfileInfoScreen;
