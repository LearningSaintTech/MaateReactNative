import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getAllRestaurants } from '../utils/apiUtils'; // Import the API function

const NearRestaurantScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await getAllRestaurants();
        console.log("Restaurants API Response:", response);

        // Check if the response has the expected structure
        if (response.status === "success" && Array.isArray(response.data)) {
          const filteredRestaurants = response.data.map((item) => ({
            id: item.id,
            name: item.restaurantName,
            isOnline: item.isOnline,
          }));
          setRestaurants(filteredRestaurants);
        } else {
          console.error('Unexpected response format:', response);
          setRestaurants([]);
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
        setRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Function to handle selection and navigation
  const handleRestaurantSelect = (restaurant) => {
    if (restaurant.isOnline) {
      setSelectedRestaurant(restaurant.name);
      navigation.navigate('Dashboard', { restaurant });
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="orangered" />
        </TouchableOpacity>
        <Text style={styles.title}>Near Restaurant</Text>
      </View>

      {/* Loading Indicator */}
      {loading ? (
        <ActivityIndicator size="large" color="orangered" style={{ marginTop: 20 }} />
      ) : restaurants.length === 0 ? (
        <Text style={styles.noDataText}>No restaurants available.</Text>
      ) : (
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.restaurantButton,
                selectedRestaurant === item.name && styles.selectedButton,
                !item.isOnline && styles.disabledButton, // Disabled styling
              ]}
              onPress={() => handleRestaurantSelect(item)}
              disabled={!item.isOnline} // Disable button if restaurant is offline
            >
              <Text
                style={[
                  styles.restaurantText,
                  selectedRestaurant === item.name && styles.selectedText,
                  !item.isOnline && styles.disabledText, // Change text color for disabled items
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'orangered',
  },
  restaurantButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: 'orangered',
    shadowColor: 'orangered',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#EAEAEA',
    borderColor: '#CCC',
  },
  restaurantText: {
    fontSize: 16,
    color: '#666',
  },
  selectedText: {
    color: 'orangered',
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#999',
  },
  noDataText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NearRestaurantScreen;