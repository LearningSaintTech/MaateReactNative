import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Verification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(45);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef([]); // Store references for input fields

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    let newOtp = [...otp];

    if (value.length === 1) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field if available
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      newOtp[index] = '';
      setOtp(newOtp);

      // Move to previous input field if available
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimer(45);
    setResendDisabled(true);
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow and Title in One Row */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#FF3D00" />
        </TouchableOpacity>
        <Text style={styles.title}>Verification</Text>
        <View></View>
      </View>

      <Text style={styles.infoText}>Code has been sent to *****678</Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={el => (inputRefs.current[index] = el)} // Store ref
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={event => handleKeyPress(event, index)} // Handle Backspace
          />
        ))}
      </View>

      <Text style={styles.resendText}>Didn't receive code?</Text>

      {/* Timer with Icon */}
      <View style={styles.timerContainer}>
        <Icon name="time-outline" size={16} color="black" />
        <Text style={styles.timerText}>
          {' '}
          00:{timer < 10 ? `0${timer}` : timer}
        </Text>
      </View>

      {/* Resend Code Button */}
      <TouchableOpacity disabled={resendDisabled} onPress={handleResendCode}>
        <Text
          style={[styles.resendCode, resendDisabled && styles.resendDisabled]}>
          Resend Code
        </Text>
      </TouchableOpacity>

      {/* Confirm OTP Button */}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Confirm OTP </Text>
          <Image
            source={require('../../assets/icons/arrow.png')}
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
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: height * 0.06,
    justifyContent: 'space-between',
  },
  backButton: {
    // padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: '#FF3D00',
   
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    marginVertical: 35,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 10,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderBottomWidth: 1, // Only bottom border
    borderBottomColor: '#CBCCCD',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  resendText: {
    fontSize: 14,
    color: 'black',
    marginTop: 25,
    fontWeight:500
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 10, 
    alignItems: 'center',
    marginTop: 20,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  resendCode: {
    fontSize: 14,
    color: '#BABDC1',
    fontWeight: 'bold',
    marginTop: 15,
  },
  resendDisabled: {
    color: '#AAA',
  },
  overlay: {
    position: 'absolute',
    bottom: height * 0.08,
    width: '90%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FF3D00',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default Verification;
