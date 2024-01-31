import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabsComponent from '../components/BottomTabsComponent';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <BottomTabsComponent />
  )
}
