import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; 

const BottomTabBar = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation(); 
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  
  const tabs = [
    { name: "Dashboard", icon: "home-outline", activeIcon: "home" },
    { name: "Offer", icon: "settings-outline", activeIcon: "settings" },
    { name: "MyOrder", icon: "basket-outline", activeIcon: "basket" },
    { name: "Profile", icon: "person-outline", activeIcon: "person" },
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => {
            setSelectedTab(tab.name);
            navigation.navigate(tab.name); 
          }}
        >
          <Icon
            name={selectedTab === tab.name ? tab.activeIcon : tab.icon}
            size={26}
            color={selectedTab === tab.name ? "#ff4500" : "#b0b0b0"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default BottomTabBar;
