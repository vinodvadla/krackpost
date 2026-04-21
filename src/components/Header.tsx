import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { COLORS } from '../theme/colors';

type Props = {
  showBack?: boolean;
  showRightIcon?: boolean;

  onBackPress?: () => void;
  onRightPress?: () => void;

  rightIcon?: React.ReactNode;

  iconColor?: string;
  containerStyle?: any;
};

const Header = ({
  showBack = true,
  showRightIcon = false,
  onBackPress,
  onRightPress,
  rightIcon,
  iconColor = COLORS.gold,
  containerStyle,
}: Props) => {
  return (
    <View style={[styles.header, containerStyle]}>
      {/* 🔙 Back Button */}
      {showBack ? (
        <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
          <ArrowLeft color={iconColor} size={24} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      {/* ✏️ Right Icon */}
      {showRightIcon ? (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={onRightPress}
          activeOpacity={0.7}
        >
          {rightIcon ? rightIcon : <Pencil color={iconColor} size={18} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  editBtn: {
    borderWidth: 1,
    borderColor: COLORS.gold,
    padding: 8,
    borderRadius: 8,
  },

  placeholder: {
    width: 24, // keeps layout balanced when icon is hidden
  },
});
