import React from "react";
import {
  
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/Ionicons";

const Onboard = ({ navigation }) => {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/images/onboard.png")} 
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Continue </Text>
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
  },
  icon: {
   
    marginLeft: 5, 
  },
  image: {
    width: "100%",
    height: "100%", 
    position: "absolute",
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

export default Onboard;
