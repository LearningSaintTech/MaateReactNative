// import React from 'react';
// import {
//   ScrollView,
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import HeaderSection from '../../components/HeaderSection';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Entypo from 'react-native-vector-icons/Entypo';

// const orders = [
//   {
//     id: '1',
//     name: 'Burger Bistro',
//     location: 'Rose Garden',
//     price: '50',
//     originalPrice: '99',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '2',
//     name: 'Pizza Palace',
//     location: 'City Square',
//     price: '120',
//     originalPrice: '199',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '3',
//     name: 'Tandoori Junction',
//     location: 'Downtown',
//     price: '200',
//     originalPrice: '299',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '4',
//     name: 'Pasta Point',
//     location: 'Green Park',
//     price: '150',
//     originalPrice: '220',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '5',
//     name: 'Subway Delight',
//     location: 'Central Mall',
//     price: '90',
//     originalPrice: '150',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '6',
//     name: 'Sushi Hub',
//     location: 'Tokyo Street',
//     price: '300',
//     originalPrice: '450',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '7',
//     name: 'Grill House',
//     location: 'Lakeside View',
//     price: '250',
//     originalPrice: '350',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '8',
//     name: 'Ice Cream World',
//     location: 'Beach Road',
//     price: '80',
//     originalPrice: '120',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '9',
//     name: 'Dosa Delight',
//     location: 'South Street',
//     price: '60',
//     originalPrice: '110',
//     image: require('../../assets/images/Burger.png'),
//   },
//   {
//     id: '10',
//     name: 'Momo Junction',
//     location: 'Food Market',
//     price: '70',
//     originalPrice: '120',
//     image: require('../../assets/images/Burger.png'),
//   },
// ];

// const MyOrderScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//       <HeaderSection />
//       <View style={{marginHorizontal: 20}}>
//         <TouchableOpacity onPress={()=>navigation.navigate('Myorder')} style={styles.orderButton}>
//           <Text style={styles.orderButtonText}>My Orders</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{flex: 1, marginBottom: 60}}>
//         <View style={styles.orderContainer}>
//           <FlatList
//             style={styles.orderCard}
//             data={orders}
//             keyExtractor={item => item.id}
//             renderItem={({item}) => (
//               <View style={styles.orderItem}>
//                 <View>
//                   <Image source={item.image} style={styles.image} />
//                 </View>
//                 <View style={styles.orderDetails}>
//                   <Text style={styles.orderName}>{item.name}</Text>
//                   <Text style={styles.orderLocation}>{item.location}</Text>
//                   <View style={styles.ratingContainer}>
//                     <Icon name="star" size={14} color="#FFD700" />
//                     <Text style={styles.ratingText}> 5.0 Rating</Text>
//                   </View>
//                 </View>
//                 <View>
//                   <Text style={styles.orderPrice}>₹{item.price}</Text>
//                   <Text style={styles.originalPrice}>
//                     ₹{item.originalPrice}
//                   </Text>
//                 </View>
//               </View>
//             )}
//           />
//         </View>

//         <View style={styles.summaryBox}>
//           {orders.map((item, index) => (
//             <View key={index}>
//               <View style={styles.summaryRow}>
//                 <Text style={styles.summaryText}>{item.name}</Text>
//                 <Text style={styles.summaryPrice}>₹{item.price}.00</Text>
//               </View>

//               {index !== orders.length - 1 && <View style={styles.divider} />}
//             </View>
//           ))}

       
//           <View style={styles.summaryRow}>
//             <Text style={[styles.summaryText, styles.totalAmountText]}>
//               Total Amount
//             </Text>
//             <Text style={[styles.summaryPrice, styles.totalAmountPrice]}>
//               ₹250.00
//             </Text>
//           </View>
//         </View>
//         <View style={styles.forgetSection}>
//           <Text style={styles.forgetText}>Forget Something?</Text>
//           <TouchableOpacity style={styles.addMoreButton}>
//             <Text style={styles.addMoreText}>Add More Items</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           style={styles.confirmButton}
//           onPress={() => navigation.navigate('Payment')}>
//           <Text style={styles.confirmButtonText}>Confirm Order</Text>
//           <Entypo name="chevron-right" size={20} color="#fff" />
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   orderButton: {
//     marginVertical: 20,
//     alignSelf: 'center',
//     paddingVertical: 12,
//     width: '100%',
//     alignItems: 'center',
//     borderColor: '#ff6600',
//     borderWidth: 1,
//     borderRadius: 12,
//   },
//   orderButtonText: {
//     color: '#ff6600',
//     fontSize: 16,
   
//   },
//   orderContainer: {
//     marginHorizontal: 20,
//   },
//   orderCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 12,
//     marginBottom: 12,
//     borderColor: '#777',
//     borderWidth: 1,
//   },
//   orderItem: {
//     flexDirection: 'row',
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 15,
//     marginRight: 10,
//   },
//   orderDetails: {
//     flex: 1,
//   },
//   orderName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },
//   orderLocation: {
//     fontSize: 14,
//     color: '#777',
//   },

//   orderPrice: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: '#8E8E8E',
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#D2D2D2',
//     textDecorationLine: 'line-through',
//     marginLeft: 8,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#777',
//   },

 
//   summaryBox: {
//     marginTop: 20,
//     backgroundColor: '#fff',
//     marginHorizontal: 20,
//     borderRadius: 15,
//     padding: 12,
//     borderColor: '#777',
//     borderWidth: 1,
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 6,
//   },
//   summaryText: {
//     fontSize: 14,
//     color: '#777',
//   },
//   summaryPrice: {
//     fontSize: 14,
//     color: '#777',
//   },
//   totalAmountText: {
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },
//   totalAmountPrice: {
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },

 
//   forgetSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginVertical: 15,
//   },
//   forgetText: {
//     fontSize: 14,
//     color: '#777',
//   },
//   addMoreButton: {
//     backgroundColor: '#444',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   addMoreText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#E8E8E8',
//     marginHorizontal: 5,
//   },
 
//   confirmButton: {
//     marginTop: 20,
//     backgroundColor: '#FA4A0C',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 15,
//     marginHorizontal: 20,
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });

// export default MyOrderScreen;


import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import HeaderSection from '../../components/HeaderSection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const orders = [
  {
    id: '1',
    name: 'Burger Bistro',
    location: 'Rose Garden',
    price: '50',
    originalPrice: '99',
    image: require('../../assets/images/Burger.png'),
  },
  {
    id: '2',
    name: 'Pizza Palace',
    location: 'City Square',
    price: '120',
    originalPrice: '199',
    image: require('../../assets/images/Burger.png'),
  },
  {
    id: '3',
    name: 'Tandoori Junction',
    location: 'Downtown',
    price: '200',
    originalPrice: '299',
    image: require('../../assets/images/Burger.png'),
  },
];

const MyOrderScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderSection />

      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Myorder')}
          style={styles.orderButton}>
          <Text style={styles.orderButtonText}>My Orders</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Use FlatList instead of ScrollView to prevent nested VirtualizedLists */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.orderContainer}>
            <Text style={styles.listTitle}>Your Orders</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.orderLocation}>{item.location}</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}> 5.0 Rating</Text>
              </View>
            </View>
            <View>
              <Text style={styles.orderPrice}>₹{item.price}</Text>
              <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View>
            {/* ✅ Order Summary */}
            <View style={styles.summaryBox}>
              {orders.map((item, index) => (
                <View key={index}>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryText}>{item.name}</Text>
                    <Text style={styles.summaryPrice}>₹{item.price}.00</Text>
                  </View>
                  {index !== orders.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
              <View style={styles.summaryRow}>
                <Text style={[styles.summaryText, styles.totalAmountText]}>
                  Total Amount
                </Text>
                <Text style={[styles.summaryPrice, styles.totalAmountPrice]}>
                  ₹250.00
                </Text>
              </View>
            </View>

            {/* ✅ Forget Something Section */}
            <View style={styles.forgetSection}>
              <Text style={styles.forgetText}>Forget Something?</Text>
              <TouchableOpacity style={styles.addMoreButton}>
                <Text style={styles.addMoreText}>Add More Items</Text>
              </TouchableOpacity>
            </View>

          
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => navigation.navigate('Payment')}>
              <Text style={styles.confirmButtonText}>Confirm Order</Text>
              <Entypo name="chevron-right" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderButton: {
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 12,
  },
  orderButtonText: {
    color: '#ff6600',
    fontSize: 16,
  },
  orderContainer: {
    marginHorizontal: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff6600',
  },
  orderItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  orderLocation: {
    fontSize: 14,
    color: '#777',
  },
  orderPrice: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  originalPrice: {
    fontSize: 14,
    color: '#D2D2D2',
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#777',
  },
  summaryBox: {
    marginTop: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 12,
    borderColor: '#777',
    borderWidth: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  summaryText: {
    fontSize: 14,
    color: '#777',
  },
  summaryPrice: {
    fontSize: 14,
    color: '#777',
  },
  totalAmountText: {
    fontWeight: 'bold',
    color: '#ff6600',
  },
  totalAmountPrice: {
    fontWeight: 'bold',
    color: '#ff6600',
  },
  forgetSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  forgetText: {
    fontSize: 14,
    color: '#777',
  },
  addMoreButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#FA4A0C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default MyOrderScreen;
