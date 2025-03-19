import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../assets/images/Home.png';
import OfferIcon from '../assets/images/Offer.png';
import OrderIcon from '../assets/images/MyOrder.png';
import ProfileIcon from '../assets/images/Profile.png';
import Profile from '../Screens/Auth/Profile';
import Myorder from './Myorder';
import Dashboard from '../Screens/Auth/Dashboard';
import OfferScreen from '../Screens/Auth/OfferScreen';
import MyOrderScreen from '../Screens/Auth/MyOrderScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          // backgroundColor: 'white',
          borderTopWidth: 0,
          height: 80 + insets.bottom, 
          paddingBottom: insets.bottom, 
          paddingTop: 15,
          borderRadius: 10,
          // shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          // shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Dashboard':
              iconSource = HomeIcon;
              break;
            case 'Offer':
              iconSource = OfferIcon;
              break;
            case 'MyOrder':
              iconSource = OrderIcon;
              break;
            case 'Profile':
              iconSource = ProfileIcon;
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#ff4500' : '#b0b0b0',
              }}
              resizeMode="contain"
            />
          );
        },
      })} >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Offer" component={OfferScreen} />
      <Tab.Screen name="MyOrder" component={MyOrderScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
