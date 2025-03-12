import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];

const WeeklyMenuTabs = ({ onBackPress }) => {
  const [activeDay, setActiveDay] = useState("Monday");
  return (
    <View style={styles.wrapper}>
    
      <View style={styles.header}>
       
        <Text style={styles.heading}>Weekly Menu</Text>
        <TouchableOpacity>
          <Icon name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

    
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeDay === day ? styles.activeTab : styles.inactiveTab]}
            onPress={() => setActiveDay(day)}
          >
            <Text style={[styles.tabText, activeDay === day && styles.activeTabText]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  backButton: {
    padding: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  container: {
    flexDirection: "row",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeTab: {
    backgroundColor: "#FF3D00",
    borderWidth: 0,
  },
  inactiveTab: {
    backgroundColor: "#FFF",
  },
  tabText: {
    fontSize: 14,
    color: "#888",
  },
  activeTabText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default WeeklyMenuTabs;
