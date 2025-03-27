import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./../Screens/HomeScreen/HomeScreen";
import ServicesByCategory from '../Screens/ServicesByCategory/ServicesByCategory';
import ServiceDetailsScreen from '../Screens/ServiceDetails/ServiceDetailsScreen';
import BookingFormScreen from '../Screens/BookingFormScreen/BookingFormScreen';


const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
      <Stack.Screen name='home' component={HomeScreen}/>
      <Stack.Screen name='services' component={ServicesByCategory}/>
      <Stack.Screen name='service_details' component={ServiceDetailsScreen}/>
      <Stack.Screen name='booking_form' component={BookingFormScreen}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})