import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { COLORS } from '../theme/colors';
type Props = {
  label: string;
  type?: 'default' | 'danger';
  icon: any;
};
const ProfileBtn = ({ label, type = 'default', icon: Icon }: Props) => {
  const isDanger = type === 'danger';
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.container, isDanger && styles.dangerContainer]}
    >
      <View style={styles.left}>
        <View style={[styles.iconBox, isDanger && styles.dangerIconBox]}>
          <Icon size={18} color={isDanger ? '#ff6b6b' : '#c19c60'} />
        </View>
        <Text style={[styles.text, isDanger && styles.dangerText]}>
          {label}
        </Text>
      </View>
      <ChevronRight size={20} color={isDanger ? '#ff6b6b' : '#c19c60'} />
    </TouchableOpacity>
  );
};

export default ProfileBtn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    height: 55,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(193,156,96,0.25)',
  },
  dangerContainer: {
    borderColor: 'rgba(255,107,107,0.6)',
    backgroundColor: 'rgba(255,0,0,0.05)',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(193,156,96,0.15)',
  },
  dangerIconBox: {
    backgroundColor: 'rgba(255,107,107,0.15)',
  },
  text: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '700',
  },
  dangerText: {
    color: '#ff6b6b',
  },
});
