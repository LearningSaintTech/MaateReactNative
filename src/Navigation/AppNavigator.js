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
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
