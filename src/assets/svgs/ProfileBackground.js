import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const ProfileBackground = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Dark Base */}
      <View style={styles.base} />

      {/* Top Gold Curve */}
      <Svg height={260} width="100%" style={styles.topCurve}>
        <Defs>
          <LinearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#EBD197" />
            <Stop offset="50%" stopColor="#B48811" />
            <Stop offset="51%" stopColor="#A2790D" />
            <Stop offset="100%" stopColor="#BB9B49" />
          </LinearGradient>
        </Defs>

        <Path
          d="M0 140 Q180 20 360 140 L360 0 L0 0 Z"
          fill="url(#goldGrad)"
        />
      </Svg>

      {/* Soft Bottom Fade (for depth) */}
      <Svg height={200} width="100%" style={styles.bottomFade}>
        <Defs>
          <LinearGradient id="fadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="transparent" />
            <Stop offset="100%" stopColor="#000000" />
          </LinearGradient>
        </Defs>

        <Path
          d="M0 0 L360 0 L360 200 L0 200 Z"
          fill="url(#fadeGrad)"
        />
      </Svg>
    </View>
  );
};

export default ProfileBackground;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
  topCurve: {
    position: "absolute",
    top: 0,
  },
  bottomFade: {
    position: "absolute",
    bottom: 0,
  },
});