import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = () => {
    navigation.navigate("Verification"); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Splash.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.whiteCard}>
        <Text style={styles.heading}>Sign-Up</Text>

        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Smith"
          placeholderTextColor="#888"
          onChangeText={(text) => setFullName(text)}
        />

        <Text style={styles.inputLabel}>Mobile No.</Text>
        <TextInput
          style={styles.input}
          placeholder="+91"
          keyboardType="phone-pad"
          maxLength={10}
          placeholderTextColor="#888"
          onChangeText={(text) => setMobile(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign-Up</Text>
          <Image
            source={require("../../assets/icons/arrow.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  skipButton: {
    position: "absolute",
    top: height * 0.06,
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF3D00",
  },
  skipText: {
    color: "#FF3D00",
    fontWeight: "bold",
    fontSize: 14,
  },
  logoContainer: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.2,
  },
  logo: {
    width: width * 0.5,
    height: height * 0.12,
  },
  whiteCard: {
    width: width * 0.9,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 80,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF3D00",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 15,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
    fontSize: 16,
    color: "#000",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FF3D00",
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});

export default Register;
