// import React from "react";
// import { View, FlatList } from "react-native";
// import HeaderSection from "../../components/HeaderSection";
// import SearchBar from "../../components/SearchBar";
// import Carousel from "../../components/carosuel";
// import WeeklyMenuTabs from "../../components/WeeklyMenuTabs";
// import CategoryFilters from "../../components/CategoryFilters";
// import FoodList from "../../components/FoodList";
// import BottomTabBar from "../../components/BottomTabBar";

// const Dashboard = () => {
//   const dummyData = [{}]; 

//   return (
//     <FlatList
//       data={dummyData}
//       renderItem={() => (
//         <View style={{ flex: 1, backgroundColor: "#fff" }}>
//           <HeaderSection />
//           <SearchBar />
//           <Carousel />
//           <WeeklyMenuTabs />
//           <CategoryFilters />
//           <FoodList />
//         </View> 
//       )}
//       keyExtractor={(_, index) => index.toString()}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// };
// export default Dashboard;


import React, { useEffect, useState } from "react";
import { View, FlatList, Modal, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderSection from "../components/HeaderSection";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/carosuel";
import WeeklyMenuTabs from "../components/WeeklyMenuTabs";
import CategoryFilters from "../components/CategoryFilters";
import FoodList from "../components/FoodList";
import BottomTabBar from "../components/BottomTabBar";

const EMAIL_API_URL = "http://192.168.1.26:8080/api/customer/email";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleEmailSubmit = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter a valid email.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        Alert.alert("Error", "Authorization token missing.");
        return;
      }

      const response = await fetch(EMAIL_API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Email added successfully!");
        setIsModalVisible(false);
      } else {
        Alert.alert("Error", data.message || "Failed to add email.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      Alert.alert("Error", "Network request failed. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Email Popup Modal */}
      {/* <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#777"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleEmailSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      <FlatList
        data={[{}]}
        renderItem={() => (
          <View style={{ flex: 1 }}>
            <HeaderSection />
            <SearchBar />
            <Carousel />
            <WeeklyMenuTabs />
            <CategoryFilters />
            <FoodList />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "orangered",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dashboard;
