import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import { COLORS } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Plans from '../screens/Plans';

type Props = {};
const Stack = createNativeStackNavigator();
const StackNavigation = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="TabBar"
        >
          <Stack.Screen name="TabBar" component={TabNavigation} />
          <Stack.Screen name="Plans" component={Plans} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default StackNavigation;
