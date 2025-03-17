import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Auth/Splash';
import Onboard from '../Screens/Auth/Onboard';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Verification from '../Screens/Auth/Verification';
import Dashboard from '../Screens/Auth/Dashboard';
import Setting from '../Screens/Auth/Setting';
import Profile from '../Screens/Auth/Profile';
import FoodDetail from '../Screens/Auth/FoodDetail';
import ProfileInfoScreen from '../Screens/Auth/ProfileInfoScreen';
import EditProfileScreen from '../Screens/Auth/EditProfileScreen';
import AddressScreen from '../Screens/Auth/AddressScreen';
import AddAddressScreen from '../Screens/Auth/AddAddressScreen';
import CartScreen from '../Screens/Auth/CartScreen';
import NotificationScreen from '../Screens/Auth/NotificationScreen';
import FavScreen from '../Screens/Auth/FavScreen';
import MyOrderScreen from '../Screens/Auth/MyOrderScreen';
import OfferScreen from '../Screens/Auth/OfferScreen';
import Payment from '../components/Payment';
import Myorder from '../components/Myorder';
import BottomTabBar from '../components/BottomTabBar';
import TrackOrderScreen from '../Screens/Auth/TrackOrderScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Dashboard" component={BottomTabBar}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
