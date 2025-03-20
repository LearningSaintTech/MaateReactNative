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
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateMobileNumber } from "../../utils/validator";
import { login, signUp } from "../../utils/apiUtils";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const theme = useColorScheme();
  const [activeTab, setActiveTab] = useState("login");
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMobileChange = (text) => {
    const cleaned = text.replace(/\D/g, "");
    setMobile(cleaned);
  };

  const handleLogin = async () => {
    setError("");

    // Validate mobile number
    const mobileValidation = validateMobileNumber(mobile);
    if (!mobileValidation.isValid) {
      setError(mobileValidation.error);
      return;
    }

    // Validate full name for signup
    if (activeTab === "signup" && !fullName.trim()) {
      setError("Full name is required for signup");
      return;
    }

    setIsLoading(true);

    try {
      if (activeTab === "signup") {
        try {
          await signUp(mobile, "123456", fullName);
          navigation.navigate("Verification", { name: fullName, mobile, flow: "signup" });
        } catch (signupError) {
          if (signupError.message.includes("Mobile number is already in use")) {
            // If the mobile number is already in use, treat it as a login flow
            await login(mobile, "123456");
            navigation.navigate("Verification", { mobile, flow: "login" });
          } else {
            throw signupError; // Re-throw other errors
          }
        }
      } else {
        await login(mobile, "123456");
        navigation.navigate("Verification", { mobile, flow: "login" });
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message || "Failed to proceed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert("Google Sign-In", "This feature is not implemented yet.");
  };

  const handleSkip = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      navigation.navigate("NearRestaurant");
    } else {
      Alert.alert("Please Sign Up or Login", "You need to sign up or log in to access the app.");
    }
  };

  const isFormValid =
    (activeTab === "signup" ? fullName.trim() : true) && validateMobileNumber(mobile).isValid;

  return (
    <View
      style={[
        styles.container,
        theme === "dark" ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
        <Image
          source={require("../../assets/icons/rightIcon.png")}
          style={styles.iconStyle}
        />
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
              style={[styles.tabText, activeTab === "login" && styles.activeTabText]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === "signup" && styles.activeTab]}
            onPress={() => setActiveTab("signup")}
          >
            <Text
              style={[styles.tabText, activeTab === "signup" && styles.activeTabText]}
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
          placeholderTextColor="#DDDDDD"
          onChangeText={handleMobileChange}
          value={mobile}
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
              value={fullName}
            />
          </>
        )}

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Image
            source={require("../../assets/images/Google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.overlay}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF3D00" style={{ marginBottom: 20 }} />
        ) : (
          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.disabledButton]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={isLoading || !isFormValid}
          >
            <Text style={styles.buttonText}>
              {activeTab === "login" ? "Login" : "Sign-Up"}
            </Text>
            <Image
              source={require("../../assets/icons/arrow.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
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
  iconStyle: {
    width: 10,
    height: 10,
    marginLeft: 8,
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
    flexDirection: "row",
    alignItems: "center",
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
    shadowOffset: { width: 10, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginTop: 50,
    overflow: "hidden",
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
    color: "black",
    marginTop: 15,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#AFAFAF",
    fontSize: 16,
    color: "#000",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 40,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
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
  disabledButton: {
    backgroundColor: "#D3D3D3",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default Login;