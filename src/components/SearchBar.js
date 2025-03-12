import { View, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import filter from "../assets/images/filter.png"; // Ensure the path is correct

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      {/* Search Box */}
      <View style={styles.container}>
        <Icon name="search-outline" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="What would you like to eat today?"
          placeholderTextColor="#999"
        />
      </View>

      {/* Filter Button (outside search box) */}
      <TouchableOpacity style={styles.filterButton}>
        <Image source={filter} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
   
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  container: {
   borderRadius:10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    marginLeft: 10,  // Ensure it is outside the search box
  },
  filterIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});

export default SearchBar;
