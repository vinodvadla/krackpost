import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Profileicon from "../assets/svgs/Profileicon";
import PosterIcon from "../assets/svgs/PosterIcon";
import LeaderIcon from "../assets/svgs/LeaderIcon";

const icons = {
  Leader: LeaderIcon,
  Poster: PosterIcon,
  Profile: Profileicon,
};

export default function CustomTabBar({ state, navigation }:any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route:any, index:number) => {
        const isFocused = state.index === index;
        const Icon = icons[route.name];
        const onPress = () => {
          navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity key={route.key} style={styles.tabItem} onPress={onPress}>
            <Icon
              size={22}
              color={isFocused ? "#FFC107" : "#C9A74E"}
              strokeWidth={2}
              active={isFocused}
            />
            <Text style={[styles.label, { opacity: isFocused ? 1 : 0.5 }]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#0A0A0A",
    borderTopWidth: 1,
    borderTopColor: "#1A1A1A",
    justifyContent: "space-around",
    alignItems: "center",
    // shadowColor: "#FFC107",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 12,
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 11,
    color: "#FFC107",
    marginTop: 4,
  },

  centerWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  centerButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFC107",
    alignItems: "center",
    justifyContent: "center",

    marginTop: -20,

    shadowColor: "#FFC107",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
});