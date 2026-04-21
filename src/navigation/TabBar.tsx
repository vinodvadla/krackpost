import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import Profileicon from '../assets/svgs/Profileicon';
import PosterIcon from '../assets/svgs/PosterIcon';
import LeaderIcon from '../assets/svgs/LeaderIcon';
const icons: any = {
  Leader: LeaderIcon,
  Poster: PosterIcon,
  Profile: Profileicon,
};

export default function CustomTabBar({ state, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const Icon = icons[route.name];
        const onPress = () => {
          navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Icon
              size={22}
              color={isFocused ? COLORS.primary : COLORS.textMuted}
              strokeWidth={2}
              active={isFocused}
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? COLORS.primary : COLORS.textMuted,
                  opacity: isFocused ? 1 : 0.7,
                },
              ]}
            >
              {route.name}
            </Text>
            {isFocused && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 72,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.tabBarBorder,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: COLORS.tabBarShadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 6,
  },
  label: { fontSize: 11, marginTop: 4, fontWeight: '800' },
  activeIndicator: {
    marginTop: 4,
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLORS.gold,
  },
});
