import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowLeft, ChevronLeft, Pencil } from 'lucide-react-native';
import { COLORS } from '../theme/colors';

type Props = {
  showBack?: boolean;
  showRightIcon?: boolean;

  onBackPress?: () => void;
  onRightPress?: () => void;

  rightIcon?: React.ReactNode;

  iconColor?: string;
  containerStyle?: any;

  rightGradient?: string[]; // 👈 NEW
};

const SecondaryHeader = ({
  showBack = true,
  showRightIcon = false,
  onBackPress,
  onRightPress,
  rightIcon,
  iconColor = COLORS.gold,
  containerStyle,
  rightGradient,
}: Props) => {
  return (
    <View style={[styles.header, containerStyle]}>
      {/* 🔙 Back Button */}
      {showBack ? (
        <TouchableOpacity
          onPress={onBackPress}
          activeOpacity={0.7}
          style={{
            backgroundColor: '#F4E9DE',
            padding: 5,
            borderRadius: 10,
          }}
        >
          <ChevronLeft color={iconColor} size={24} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      {showRightIcon ? (
        <TouchableOpacity onPress={onRightPress} activeOpacity={0.8}>
          {rightGradient ? (
            <LinearGradient colors={rightGradient} style={styles.gradientBtn}>
              {rightIcon ? rightIcon : <Pencil color="#FFF" size={18} />}
            </LinearGradient>
          ) : (
            <View style={styles.editBtn}>
              {rightIcon ? rightIcon : <Pencil color={iconColor} size={18} />}
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  editBtn: {
    borderWidth: 1,
    borderColor: COLORS.gold,
    padding: 8,
    borderRadius: 8,
  },
  gradientBtn: {
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: 24,
  },
});
