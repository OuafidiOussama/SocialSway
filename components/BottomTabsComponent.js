import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LickedScreen from '../screens/LickedScreen';
const Tab = createBottomTabNavigator();

export default function BottomTabsComponent() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Licked" component={LickedScreen} />
    </Tab.Navigator>
  )
}
