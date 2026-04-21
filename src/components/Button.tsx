import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/colors';

type Props = {
  title: string;
  onPress: () => void;
  colors?: string[];
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  rightIcon?: React.ReactNode;
};

const Button = ({
  title,
  onPress,
  colors = ['#A2790D', '#BB9B49', '#BB9B49', '#B48811'],
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
      >
        <LinearGradient
          colors={disabled ? ['#ccc', '#aaa'] : colors}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={[styles.text, textStyle]}>{title}</Text>
          {rightIcon && rightIcon}
        </LinearGradient>
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
     shadowOffset: {
       width: 0,
       height: 3,
     },
     shadowOpacity: 0.27,
     shadowRadius: 4.65,
     elevation: 6,
  },

  button: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  text: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.primary, // 🔥 darker gold text
  },
});
