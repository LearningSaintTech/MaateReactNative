import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; 

const notifications = Array(10).fill("Notifications"); 

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#FF4500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

     
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4500',
    marginLeft: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Notification;
