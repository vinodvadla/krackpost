import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { COLORS } from '../theme/colors';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconWrapper}
      >
        <ArrowLeft size={24} color={COLORS.gold} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('Edit Clicked')}
        style={styles.iconWrapper}
      >
        <Pencil size={16} color={COLORS.gold} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
