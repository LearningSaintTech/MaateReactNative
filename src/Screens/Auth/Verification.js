import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { login, getCustomerProfile, resendOtp } from "../../utils/apiUtils";
import { setUser, clearUser } from "../../Redux/userSlice";
import Geolocation from "react-native-geolocation-service";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

const { width, height } = Dimensions.get("window");

const Verification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { name, mobile, flow = "signup" } = route.params || {};
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value, index) => {
    let newOtp = [...otp];

    if (value.length === 1) {
      if (!/^\d$/.test(value)) {
        return;
      }
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Function to get the current location with enhanced error handling
  const getCurrentLocation = async () => {
    try {
      const permission =
        Platform.OS === "ios"
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  
      let permissionStatus = await check(permission);
  
      if (permissionStatus !== RESULTS.GRANTED) {
        permissionStatus = await request(permission);
      }
  
      if (permissionStatus !== RESULTS.GRANTED) {
        Alert.alert("Permission Denied", "Please enable location services.");
        return { latitude: null, longitude: null };
      }
  
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Location Error:", error);
            Alert.alert("Location Error", "Unable to fetch location.");
            resolve({ latitude: null, longitude: null });
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
        );
      });
    } catch (error) {
      console.error("Error in getCurrentLocation:", error);
      return { latitude: null, longitude: null };
    }
  };
  
  
  

  const handleConfirmOtp = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
      return;
    }

    if (!/^\d{6}$/.test(otpCode)) {
      Alert.alert("Invalid OTP", "OTP must contain only digits.");
      return;
    }

    setIsLoading(true);

    try {
      console.log(`Verifying OTP for ${flow} with:`, { mobile, otpCode, name });

      // Call login API to verify OTP
      const authResponse = await login(mobile, otpCode);
      console.log("Auth API Response:", authResponse);

      const accessToken = authResponse?.data?.accessToken;
      if (!accessToken) {
        throw new Error("Access token not found in response");
      }

      await AsyncStorage.setItem("accessToken", accessToken);
      console.log("Token stored successfully:", accessToken);

      const profileResponse = await getCustomerProfile(accessToken);
      console.log("Profile API Response:", profileResponse);

      const userProfile = profileResponse?.data;
      if (!userProfile) {
        throw new Error("User profile not found");
      }

      // Fetch the current location
      const location = await getCurrentLocation();
      const latitude = location.latitude;
      const longitude = location.longitude;

      if (latitude && longitude) {
        console.log("Current location:", { latitude, longitude });
      } else {
        console.log("Location fetch failed, proceeding without location data.");
        Alert.alert("Location Error", "Unable to fetch your location. Proceeding without location data.");
      }

      // Dispatch user data including location to Redux
      dispatch(
        setUser({
          name: userProfile.fullName || name || "",
          email: userProfile.email || "",
          phone: userProfile.mobileNumber || mobile || "",
          profilePicture: userProfile.profilePicture || "",
          accessToken: accessToken,
          isProfileCompleted: userProfile.profileCompleted || false,
          latitude: latitude,
          longitude: longitude,
        })
      );

      Alert.alert("Success", flow === "signup" ? "Signup successful!" : "Login successful!");

      // Navigate based on profile completion status
      if (userProfile.profileCompleted) {
        navigation.navigate("NearRestaurant");
      } else {
        navigation.navigate("UpdateProfile");
      }
    } catch (error) {
      console.error("Auth Error:", error);
      if (error.message === "Session expired. Please log in again.") {
        await AsyncStorage.removeItem("accessToken");
        dispatch(clearUser());
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", error.message || "Authentication failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setTimer(45);
    setResendDisabled(true);
    setOtp(["", "", "", "", "", ""]);

    try {
      await resendOtp(mobile);
      Alert.alert("Success", "OTP resent successfully!");
    } catch (error) {
      console.error("Resend OTP Error:", error);
      Alert.alert("Error", "Failed to resend OTP. Please try again.");
      setTimer(0);
      setResendDisabled(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#FF3D00" />
        </TouchableOpacity>
        <Text style={styles.title}>Verification</Text>
        <View></View>
      </View>

      <Text style={styles.infoText}>Code has been sent to {mobile || "*****678"}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <Text style={styles.resendText}>Didn't receive code?</Text>

      <View style={styles.timerContainer}>
        <Icon name="time-outline" size={16} color="black" />
        <Text style={styles.timerText}> 00:{timer < 10 ? `0${timer}` : timer}</Text>
      </View>

      <TouchableOpacity onPress={handleResendCode} disabled={resendDisabled}>
        <Text style={[styles.resendCode, resendDisabled && styles.resendDisabled]}>
          Resend Code
        </Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF3D00" style={{ marginBottom: 20 }} />
        ) : (
          <TouchableOpacity
            style={[styles.button, otp.join("").length !== 6 && styles.disabledButton]}
            onPress={handleConfirmOtp}
            disabled={otp.join("").length !== 6 || isLoading}
          >
            <Text style={styles.buttonText}>Confirm OTP</Text>
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
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: height * 0.06,
    justifyContent: "space-between",
  },
  backButton: {},
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: "#FF3D00",
  },
  infoText: {
    fontSize: 16,
    color: "black",
    marginVertical: 35,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginTop: 10,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#CBCCCD",
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  resendText: {
    fontSize: 14,
    color: "black",
    marginTop: 25,
    fontWeight: "500",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  timerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  resendCode: {
    fontSize: 14,
    color: "#FF3D00",
    fontWeight: "bold",
    marginTop: 15,
  },
  resendDisabled: {
    color: "#AAA",
  },
  overlay: {
    position: "absolute",
    bottom: height * 0.08,
    width: "90%",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FF3D00",
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 15,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default Verification;