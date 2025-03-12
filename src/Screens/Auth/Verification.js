import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; 

const { width, height } = Dimensions.get("window");

const Verification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(45);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendCode = () => {
    setTimer(45);
    setResendDisabled(true);

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#FF3D00" />
      </TouchableOpacity>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.infoText}>Code has been sent to *****678</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>
      <Text style={styles.resendText}>Didn't receive code?</Text>
      <View style={styles.timerContainer}>
        <Icon name="time-outline" size={16} color="black" />
        <Text style={styles.timerText}> 00:{timer < 10 ? `0${timer}` : timer}</Text>
      </View>
      <TouchableOpacity disabled={resendDisabled} onPress={handleResendCode}>
        <Text style={[styles.resendCode, resendDisabled && styles.resendDisabled]}>
          Resend Code
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity   onPress={()=>navigation.navigate('Dashboard')} style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm OTP ➤</Text>
      </TouchableOpacity> */}


      <View style={styles.overlay}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Dashboard")}>
                <Text style={styles.buttonText}>Confirm OTP </Text>
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
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: height * 0.06,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF3D00",
    marginTop: height * 0.1,
  },
  infoText: {
    fontSize: 16,
    color: "#444",
    marginVertical: 15,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    marginTop: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  resendText: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  timerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  resendCode: {
    fontSize: 14,
    color: "#FF3D00",
    fontWeight: "bold",
    marginTop: 10,
  },
  resendDisabled: {
    color: "#AAA",
  },
  confirmButton: {
    position: "absolute",
    bottom: height * 0.05,
    width: "90%",
    backgroundColor: "#FF3D00",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  confirmText: {
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
    paddingHorizontal: 120,
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

export default Verification;
