import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { COLORS } from '../theme/colors';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  rightIcon?: React.ReactNode;
};

const Button = ({
  title,
  onPress,
  disabled = false,
  containerStyle,
  textStyle,
  rightIcon,
}: Props) => {
  return (
    <View style={[styles.shadowWrapper, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        disabled={disabled}
        style={{ borderRadius: 16, overflow: 'hidden' }}
      >
        <View style={styles.buttonContainer}>
          {/* SVG Gradient Background */}
          <Svg style={StyleSheet.absoluteFill}>
            <Defs>
              <LinearGradient
                id="grad"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <Stop offset="0%" stopColor="#CB9E3F" />
                <Stop offset="60%" stopColor="#F2BC4C" />
                <Stop offset="40%" stopColor="#ebcf9aff" />
                <Stop offset="20%" stopColor="#F2BC4C" />
                <Stop offset="100%" stopColor="#F1B028" />
              </LinearGradient>
            </Defs>
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="16"
              ry="16"
              fill="url(#grad)"
            />
          </Svg>

          {/* Content */}
          <View style={styles.content}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {rightIcon && rightIcon}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 16,
    borderColor: COLORS.gold,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  buttonContainer: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  text: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
});