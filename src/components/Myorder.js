import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ongoingOrders = [
  {
    id: '#162432',
    category: 'Food',
    name: 'Pizza Hut',
    price: '35.25',
    items: '03 Items',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242432',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242433',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242434',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242435',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    image: require('../assets/images/Burger.png'),
  },
];

const historyOrders = [
  {
    id: '#162432',
    category: 'Food',
    name: 'Pizza Hut',
    price: '35.25',
    items: '03 Items',
    date: '29 JAN, 12:30',
    status: 'Completed',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242431',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    date: '30 JAN, 12:30',
    status: 'Completed',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242433',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    date: '30 JAN, 12:30',
    status: 'Completed',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#242434',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    date: '30 JAN, 12:30',
    status: 'Completed',
    image: require('../assets/images/Burger.png'),
  },
  {
    id: '#245432',
    category: 'Drink',
    name: 'McDonald',
    price: '40.15',
    items: '02 Items',
    date: '30 JAN, 12:30',
    status: 'Completed',
    image: require('../assets/images/Burger.png'),
  },
];

const Myorder = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Ongoing');

  const renderOngoingItem = ({item}) => (
    <View style={styles.orderContainer}>
      {/* Category & Order ID */}
      <View style={styles.categoryRow}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.orderId}>{item.id}</Text>
      </View>

      {/* Order Card */}
      <View style={styles.orderCard}>
        <View>
          <Image source={item.image} style={styles.orderImage} />
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.orderName}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.orderPrice}>₹{item.price}</Text>

            <View style={styles.verticalDivider} />

            <Text style={styles.orderItems}>{item.items}</Text>
          </View>

         
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHistoryItem = ({item}) => (
    <View style={styles.orderContainer}>
      {/* Category, Status & Order ID */}
      <View style={styles.categoryRow}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text
          style={[
            styles.orderStatus,
            item.status === 'Completed'
              ? styles.completedText
              : styles.canceledText,
          ]}>
          {item.status}
        </Text>
        <Text style={styles.orderId}>{item.id}</Text>
      </View>

      {/* Order Card */}
      <View style={styles.orderCard}>
        <Image source={item.image} style={styles.orderImage} />

        <View style={styles.orderDetails}>
          <Text style={styles.orderName}>{item.name}</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.orderPrice}>₹{item.price}</Text>
            <View style={styles.verticalDivider} />
            <Text style={styles.orderDate}>
              {item.date} • {item.items}
            </Text>
          </View>

          {/* Buttons for History Orders */}
          
        </View>
      </View>
      <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.rateButton}>
              <Text style={styles.rateText}>Rate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reorderButton}>
              <Text style={styles.reorderText}>Re-Order</Text>
            </TouchableOpacity>
          </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FF5722" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Orders</Text>
        <View style={{width: 24}} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Ongoing' && styles.activeTab]}
          onPress={() => setSelectedTab('Ongoing')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Ongoing' && styles.activeTabText,
            ]}>
            Ongoing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'History' && styles.activeTab]}
          onPress={() => setSelectedTab('History')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'History' && styles.activeTabText,
            ]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render Orders based on Selected Tab */}
      <FlatList
        data={selectedTab === 'Ongoing' ? ongoingOrders : historyOrders}
        keyExtractor={item => item.id}
        renderItem={
          selectedTab === 'Ongoing' ? renderOngoingItem : renderHistoryItem
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5722',
    textAlign: 'center',
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#E8E8E8',
  },
  tab: {flex: 1, paddingVertical: 10, alignItems: 'center'},
  tabText: {fontSize: 16, color: '#888'},
  activeTab: {borderBottomWidth: 3, borderBottomColor: '#FF5722'},
  activeTabText: {color: '#FF5722', fontWeight: 'bold'},
  orderContainer: {marginTop: 20},
  categoryRow: {flexDirection: 'row', justifyContent: 'space-between'},
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 10,
  },
  orderImage: {width: 60, height: 60, borderRadius: 10, marginRight: 10},
  orderDetails: {flex: 1},
  orderName: {fontSize: 16, fontWeight: 'bold'},
  orderPrice: {fontSize: 14, fontWeight: 'bold'},
  orderDate: {fontSize: 12, color: '#888'},
  buttonRow: {flexDirection: 'row', marginTop: 10, justifyContent:"space-between"},
  trackButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    width: 139,
  },
  trackText: {color: '#fff', fontWeight: 'bold', textAlign: 'center'},
  cancelButton: {
    borderWidth: 1,
    borderColor: '#FF5722',
    padding: 10,
    borderRadius: 6,
    width: 139,
  },
  cancelText: {color: '#FF5722', fontWeight: 'bold', textAlign: 'center'},
  rateButton: {
    borderWidth: 1,
    borderColor: '#FF5722',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    width:139
  },
  canceledText: {color: 'red'},
  verticalDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#888',
    marginHorizontal: 8,
  },

  rateText: {color: '#FF5722', fontWeight: 'bold',textAlign:"center"},
  reorderButton: {backgroundColor: '#FF5722', padding: 10, borderRadius: 6,width:139},
  reorderText: {color: '#fff', fontWeight: 'bold',textAlign:"center"},
});

export default Myorder;
