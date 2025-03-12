
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  useColorScheme,
  Dimensions,
} from "react-native";
import { validateMobileNumber } from "../../utils/validator"; 
const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const theme = useColorScheme();
  const [activeTab, setActiveTab] = useState("login");
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState(""); 
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (activeTab === "login") {
      navigation.navigate("Verification");
    } else {
      navigation.navigate("Verification");
    }
  };

  return (
    <View
      style={[
        styles.container,
        theme === "dark" ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      
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
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "login" && styles.activeTab]}
            onPress={() => setActiveTab("login")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "login" && styles.activeTabText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === "signup" && styles.activeTab]}
            onPress={() => setActiveTab("signup")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "signup" && styles.activeTabText,
              ]}
            >
              Sign-up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.inputLabel}>Mobile No.</Text>
        <TextInput
          style={styles.input}
          placeholder="+91"
          keyboardType="phone-pad"
          maxLength={10}
          placeholderTextColor="#888"
          onChangeText={(text) => setMobile(text)}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {activeTab === "signup" && (
          <>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="John Smith"
              placeholderTextColor="#888"
              onChangeText={(text) => setFullName(text)}
            />
          </>
        )}

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/images/Google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

     


<View style={styles.overlay}>
        <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            {activeTab === "login" ? "Login" : "Sign-Up"}
          </Text>
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
  lightBackground: {
    backgroundColor: "#F5F5F5",
  },
  darkBackground: {
    backgroundColor: "#1E1E1E",
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
  },
  tabContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  tabButton: {
    paddingVertical: 15,
    width: "40%",
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#FF3D00",
  },
  tabText: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
  },
  activeTabText: {
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "bold",
  },
  form: {
    width: "90%",
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 15,
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
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#555",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "#AAA",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
  loginButton: {
    position: "absolute",
    bottom: height * 0.05,
    width: "90%",
    backgroundColor: "#FF3D00",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  loginText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  overlay: {
    position: "absolute",
    bottom: height * 0.08,
    width: "100%",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",  
    backgroundColor: "#FF3D00",
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
});

export default Login;


