import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const paymentMethods = [
  {id: '1', name: 'Cash', icon: require('../assets/icons/Cash.png')},
  {id: '2', name: 'Visa', icon: require('../assets/icons/Visa.png')},
  {
    id: '3',
    name: 'Mastercard',
    icon: require('../assets/icons/MasterCard.png'),
  },
  {id: '4', name: 'Cash', icon: require('../assets/icons/Cash.png')},
  {id: '5', name: 'Visa', icon: require('../assets/icons/Visa.png')},
];

const Payment = () => {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState('3'); // Default: Mastercard

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FF5722" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
        <View style={{width: 24}} />
      </View>

      {/* Payment Methods */}
      <FlatList
        horizontal
        data={paymentMethods}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={true}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.paymentMethod,
              selectedMethod === item.id && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod(item.id)}>
            <Image source={item.icon} style={styles.paymentIcon} />
            {selectedMethod === item.id && (
              <Entypo
                name="check"
                size={16}
                color="white"
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        )}
      />

      {/* Card Placeholder */}
      <View style={styles.cardBox}>
        <Image
          source={require('../assets/images/card.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>No master card added</Text>
        <Text style={styles.cardSubtitle}>
          You can add a mastercard and save it for later
        </Text>
      </View>
      <TouchableOpacity style={styles.addNewButton}>
        <Entypo name="plus" size={18} color="#FF5722" />
        <Text style={styles.addNewText}> ADD NEW</Text>
      </TouchableOpacity>

      {/* Total Amount */}
      <View >
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>TOTAL:</Text>
          <Text style={styles.totalAmount}>₹250.00</Text>
        </View>

        {/* Done Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Myorder')} style={styles.doneButton}>
          <Text style={styles.doneText}>Done</Text>
          <Entypo name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex1: 1,
    position: 'relative',
  },
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
  paymentMethod: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  selectedMethod: {
    borderColor: '#FF5722',
    borderWidth: 2,
    position: 'relative',
  },
  paymentIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  checkIcon: {
    position: 'absolute',
    top: 1,
    right: 1,
    backgroundColor: '#FF5722',
    borderRadius: 10,
    padding: 2,
  },
  cardBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  cardImage: {
    width: 400,
    height: 200,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 5,
  },
  addNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 8,
  },
  addNewText: {
    color: '#FF5722',
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  totalLabel: {
    fontSize: 16,
    color: '#888',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  doneButton: {
    flexDirection: 'row',
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  doneText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
 
});

export default Payment;
