import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash';
import Onboard from '../Screens/Auth/Onboard';
import Login from '../Screens/Auth/Login';
import Verification from '../Screens/Auth/Verification';
import Setting from '../Screens/Setting';
import Profile from '../Screens/Profile';
import FoodDetail from '../Screens/FoodDetail';
import ProfileInfoScreen from '../Screens/ProfileInfoScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import AddressScreen from '../Screens/AddressScreen';
import AddAddressScreen from '../Screens/AddAddressScreen';
import CartScreen from '../Screens/CartScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import FavScreen from '../Screens/FavScreen';
import MyOrderScreen from '../Screens/MyOrderScreen';
import OfferScreen from '../Screens/OfferScreen';
import Payment from '../components/Payment';
import Myorder from '../components/Myorder';
import BottomTabBar from '../components/BottomTabBar';
import TrackOrderScreen from '../Screens/TrackOrderScreen';
import { Provider } from "react-redux";
import store from "../Redux/store"; 
import NearRestaurantScreen from '../Screens/NearRestaurantScreen';
import Dashboard from '../Screens/Dashboard';

const Stack = createStackNavigator();
const AppNavigator = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail}/>
        <Stack.Screen name="ProfileInfo" component={ProfileInfoScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name="Address" component={AddressScreen}/>
        <Stack.Screen name="AddAddress" component={AddAddressScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Notification" component={NotificationScreen}/>
        <Stack.Screen name="Fav" component={FavScreen}/>
        <Stack.Screen name="MyOrder" component={MyOrderScreen}/>
        <Stack.Screen name="Offer" component={OfferScreen}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Myorder" component={Myorder}/>
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen}/>
        <Stack.Screen name="NearRestaurant" component={NearRestaurantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default AppNavigator;
