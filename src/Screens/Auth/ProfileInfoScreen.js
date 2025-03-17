
import React from "react"; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProfileInfoScreen = () => {
  const navigation = useNavigation(); 
   
  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

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
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Aditya Raj</Text>
            <View style={styles.locationRow}>
              <IonIcon name="location-sharp" size={14} color="red" />
              <Text style={styles.locationText}>H-70, Sector 63, Noida</Text>
            </View>
          </View>
        </View>
        <View style={styles.amountBox}>
          <Text style={styles.amountText}>Remaining Amount</Text>
          <Text style={styles.amountValue}>₹2500.00</Text>
        </View>
      </View>

      {/* User Details */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Icon name="person" size={20} color="orangered" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.infoText}>Vishal Khadok</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="email" size={20} color="blue" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.infoText}>hello@halallab.co</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Icon name="phone" size={20} color="green" style={styles.icon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.infoText}>408-841-0926</Text>
          </View>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
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
  amountBox: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  amountText: {
    color: "#bbb",
    fontSize: 14,
  },
  amountValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
