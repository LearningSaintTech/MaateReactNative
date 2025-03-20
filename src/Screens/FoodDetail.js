import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const FoodDetail = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState('14');
  const navigation = useNavigation();

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="rgba(250, 74, 12, 1)" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
        <View></View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/Burger.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.wishlistButton}>
          <Icon name="heart-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Burger Bistro</Text>
      <Text style={styles.description}>
        Prosciutto e funghi is a pizza variety that is topped with tomato sauce.
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="star" size={16} color="rgba(250, 74, 12, 1)" />
          <Text style={styles.infoText}>4.7</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="bicycle" size={18} color="rgba(250, 74, 12, 1)" />
          <Text style={styles.infoText}>Free</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="time-outline" size={16} color="rgba(250, 74, 12, 1)" />
          <Text style={styles.infoText}>20 min</Text>
        </View>
        <View></View>
        <View></View>
      </View>
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeLabel}>SIZE:</Text>
        {['10', '14', '16'].map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.activeSize,
            ]}
            onPress={() => setSelectedSize(size)}>
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && styles.activeSizeText,
              ]}>
              {size}"
            </Text>
          </TouchableOpacity>
        ))}
        <View></View>
        <View></View>
        <View></View>
      </View>
      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>Add More Items +</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.footer}>
          <Text style={styles.price}>₹100</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={handleDecrement}
              style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrement}
              style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Payment')} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
              <Image
                      source={require('../assets/icons/arrow.png')}
                      style={styles.icon}
                      resizeMode="contain"
                    />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: 20},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(250, 74, 12, 1)',
  },

  imageContainer: {
    position: 'relative',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: '100%', height: 200, borderRadius: 10},

  wishlistButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 6,
    borderRadius: 20,
  },

  title: {fontSize: 20, fontWeight: 'bold', marginTop: 10},
  description: {color: 'gray', marginBottom: 10},

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoItem: {flexDirection: 'row', alignItems: 'center'},
  infoText: {fontSize: 16, marginLeft: 5},

  sizeLabel: {fontSize: 16, fontWeight: 'bold', marginTop: 10},
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    alignSelf: 'center',
    width: '100%',
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  sizeText: {color: 'black'},
  activeSize: {
    backgroundColor: 'rgba(250, 74, 12, 1)',
  },
  activeSizeText: {color: 'white', fontWeight: 'bold'},

  addMoreButton: {
    borderWidth: 1,
    borderColor: 'rgba(250, 74, 12, 1)',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  addMoreText: {
    color: 'rgba(250, 74, 12, 1)',
    fontSize: 16,
    fontWeight: 'bold',
  },

  bottomContainer: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // position: "absolute",
    top: 100,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  quantityContainer: {
    flexDirection: 'row',
    gap:8,
    alignItems: 'center',
    backgroundColor: '#121223',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  quantityButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)", 
  },

  quantityText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
  },

  addToCartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(250, 74, 12, 1)',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    width: '100%',
  },

  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FoodDetail;
