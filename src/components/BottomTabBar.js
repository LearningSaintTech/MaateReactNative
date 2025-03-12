import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

  const BottomTabBar = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState("Home");

  const tabs = [
    { name: "Dashboard", icon: "home-outline", activeIcon: "home" },
    { name: "Setting", icon: "settings-outline", activeIcon: "settings" },
    { name: "Cart", icon: "basket-outline", activeIcon: "basket" },
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
          }}>
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
    // paddingVertical: 10,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default BottomTabBar;
