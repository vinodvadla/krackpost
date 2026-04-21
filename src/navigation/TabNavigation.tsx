import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './TabBar';
import Profile from '../screens/Profile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Leader" children={() => <Profile />} />
      <Tab.Screen name="Poster" children={() => <Profile />} />
      <Tab.Screen name="Profile" children={() => <Profile />} />
    </Tab.Navigator>
  );
}
