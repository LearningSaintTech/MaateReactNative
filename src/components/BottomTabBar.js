import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const BottomTabBar = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  const tabs = [
    {name: 'Dashboard', icon: 'home-outline', activeIcon: 'home'},
    {name: 'Offer', icon: 'settings-outline', activeIcon: 'settings'},
    {name: 'MyOrder', icon: 'basket-outline', activeIcon: 'basket'},
    {name: 'Profile', icon: 'person-outline', activeIcon: 'person'},
  ];

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => {
            setSelectedTab(tab.name);
            navigation.navigate(tab.name);
          }}>
          <Icon
            name={selectedTab === tab.name ? tab.activeIcon : tab.icon}
            size={26}
            color={selectedTab === tab.name ? '#ff4500' : '#b0b0b0'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    left: '2.5%',
    right: '2.5%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10, // Add horizontal padding
    borderRadius: 10, // Optional: Slightly rounded corners for a smoother look
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Move shadow downward
    shadowOpacity: 0.2, // Adjust opacity for a soft effect
    shadowRadius: 4,
    elevation: 5, // Ensure shadow appears on Android
    zIndex:100
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default BottomTabBar;
