// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   TouchableOpacity,
// //   StyleSheet,
// // } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { useNavigation } from '@react-navigation/native';

// // const restaurants = [
// //   'The Hungry Bear',
// //   'The Cozy Corner',
// //   'Rainbow Bistro',
// //   'Pride Plate',
// //   'Diverse Dishes',
// //   'Transcend Cuisine',
// //   'Queer Quisine',
// //   'Plus One Café',
// //   'The Velvet Table',
// //   'Gastronomy Garden',
// //   'Unity Eats',
// //   'Spectrum Flavors',
// // ];

// // const NearRestaurantScreen = () => {
// //   const navigation = useNavigation();
// //   const [selectedRestaurant, setSelectedRestaurant] = useState('The Hungry Bear');

// //   return (
// //     <View style={styles.container}>
// //       {/* Back Button and Title */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Ionicons name="chevron-back" size={24} color="orangered" />
// //         </TouchableOpacity>
// //         <Text style={styles.title}>Near Restaurant</Text>
// //       </View>

// //       {/* Restaurant List */}
// //       <FlatList
// //         data={restaurants}
// //         keyExtractor={(item) => item}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity
// //             style={[
// //               styles.restaurantButton,
// //               selectedRestaurant === item && styles.selectedButton,
// //             ]}
// //             onPress={() => setSelectedRestaurant(item)}
// //           >
// //             <Text
// //               style={[
// //                 styles.restaurantText,
// //                 selectedRestaurant === item && styles.selectedText,
// //               ]}
// //             >
// //               {item}
// //             </Text>
// //           </TouchableOpacity>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F8F8F8',
// //     paddingHorizontal: 20,
// //     paddingTop: 40,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   backButton: {
// //     marginRight: 10,
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: 'orangered',
// //   },
// //   restaurantButton: {
// //     backgroundColor: 'white',
// //     paddingVertical: 12,
// //     paddingHorizontal: 15,
// //     borderRadius: 8,
// //     borderWidth: 1,
// //     borderColor: '#DDD',
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   selectedButton: {
// //     borderColor: 'orangered',
// //     shadowColor: 'orangered',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 5,
// //   },
// //   restaurantText: {
// //     fontSize: 16,
// //     color: '#666',
// //   },
// //   selectedText: {
// //     color: 'orangered',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default NearRestaurantScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'http://192.168.1.26:8080/api/dasboard/allRestaurants';

// const NearRestaurantScreen = () => {
//   const navigation = useNavigation();
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const token = await AsyncStorage.getItem('accessToken');
//         if (!token) {
//           console.error('No token found');
//           return;
//         }

//         const response = await fetch(API_URL, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           const filteredRestaurants = data.map((item) => ({
//             id: item.id,
//             name: item.restaurantName,
//             isOnline: item.isOnline,
//           }));
//           setRestaurants(filteredRestaurants);
//         } else {
//           console.error('Error fetching restaurants:', data);
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Back Button and Title */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="chevron-back" size={24} color="orangered" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Near Restaurant</Text>
//       </View>

//       {/* Loading Indicator */}
//       {loading ? (
//         <ActivityIndicator size="large" color="orangered" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={restaurants}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 styles.restaurantButton,
//                 selectedRestaurant === item.name && styles.selectedButton,
//                 !item.isOnline && styles.disabledButton, // Disabled styling
//               ]}
//               onPress={() => {
//                 if (item.isOnline) {
//                   setSelectedRestaurant(item.name);
//                 }
//               }}
//               disabled={!item.isOnline} // Disable button if restaurant is offline
//             >
//               <Text
//                 style={[
//                   styles.restaurantText,
//                   selectedRestaurant === item.name && styles.selectedText,
//                   !item.isOnline && styles.disabledText, // Change text color for disabled items
//                 ]}
//               >
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'orangered',
//   },
//   restaurantButton: {
//     backgroundColor: 'white',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#DDD',
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   selectedButton: {
//     borderColor: 'orangered',
//     shadowColor: 'orangered',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#EAEAEA',
//     borderColor: '#CCC',
//   },
//   restaurantText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   selectedText: {
//     color: 'orangered',
//     fontWeight: 'bold',
//   },
//   disabledText: {
//     color: '#999',
//   },
// });

// export default NearRestaurantScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'http://192.168.1.26:8080/api/dasboard/allRestaurants';

// const NearRestaurantScreen = () => {
//   const navigation = useNavigation();
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const token = await AsyncStorage.getItem('accessToken');
//         if (!token) {
//           console.error('No token found');
//           return;
//         }

//         const response = await fetch(API_URL, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           const filteredRestaurants = data.map((item) => ({
//             id: item.id,
//             name: item.restaurantName,
//             isOnline: item.isOnline,
//           }));
//           setRestaurants(filteredRestaurants);
//         } else {
//           console.error('Error fetching restaurants:', data);
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Back Button and Title */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="chevron-back" size={24} color="orangered" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Near Restaurant</Text>
//       </View>

//       {/* Loading Indicator */}
//       {loading ? (
//         <ActivityIndicator size="large" color="orangered" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={restaurants}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 styles.restaurantButton,
//                 selectedRestaurant === item.name && styles.selectedButton,
//                 !item.isOnline && styles.disabledButton, // Disabled styling
//               ]}
//               onPress={() => {
//                 if (item.isOnline) {
//                   setSelectedRestaurant(item.name);
//                 }
//               }}
//               disabled={!item.isOnline} // Disable button if restaurant is offline
//             >
//               <Text
//                 style={[
//                   styles.restaurantText,
//                   selectedRestaurant === item.name && styles.selectedText,
//                   !item.isOnline && styles.disabledText, // Change text color for disabled items
//                 ]}
//               >
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'orangered',
//   },
//   restaurantButton: {
//     backgroundColor: 'white',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#DDD',
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   selectedButton: {
//     borderColor: 'orangered',
//     shadowColor: 'orangered',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#EAEAEA',
//     borderColor: '#CCC',
//   },
//   restaurantText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   selectedText: {
//     color: 'orangered',
//     fontWeight: 'bold',
//   },
//   disabledText: {
//     color: '#999',
//   },
// });
// export default NearRestaurantScreen;


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
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.1.26:8080/api/dasboard/allRestaurants';

const NearRestaurantScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          const filteredRestaurants = data.map((item) => ({
            id: item.id,
            name: item.restaurantName,
            isOnline: item.isOnline,
          }));
          setRestaurants(filteredRestaurants);
        } else {
          console.error('Error fetching restaurants:', data);
        }
      } catch (error) {
        console.error('Network error:', error);
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
});

export default NearRestaurantScreen;
