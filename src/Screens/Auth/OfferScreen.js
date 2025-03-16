import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import BottomTabBar from '../../components/BottomTabBar'; 

const {width, height} = Dimensions.get('window');

const offers = [
  {id: '1', image: require('../../assets/images/Banner1.png')},
  {id: '2', image: require('../../assets/images/Banner2.png')},
  {id: '3', image: require('../../assets/images/Banner3.png')},
  {id: '4', image: require('../../assets/images/Banner4.png')},
];

const OfferScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
       
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="orangered" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Offers</Text>
          <View></View>
        </View>

      
        <FlatList
          data={offers}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          contentContainerStyle={{paddingBottom: height * 0.12}} 
        />
      </View>
      <BottomTabBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'orangered',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: width * 0.05,
    alignSelf: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.4,
    borderRadius: 15,
  },
});

export default OfferScreen;
