import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/colors';

const ContactInfoCard = () => {
  return (
    <View style={styles.wrapper}>
      {/* 🎯 Premium Gradient Border (static) */}
      <LinearGradient
        colors={[
          'rgba(238, 182, 89, 0.8)',
          'rgba(98, 30, 41, 0.25)',
          'rgba(238, 182, 89, 0.8)',
        ]}
        style={styles.borderGradient}
      >
        {/* 🧱 Inner Card */}
        <View style={styles.container}>
          {/* ROW 1 */}
          <View style={styles.row}>
            <View style={[styles.item, styles.leftItem]}>
              <Text style={styles.label}>Contact Number</Text>
              <Text style={styles.value}>+91 9876543210</Text>
            </View>

            <View style={[styles.item, styles.rightItem]}>
              <Text style={styles.label}>Constituency</Text>
              <Text style={styles.value}>Hyderabad</Text>
            </View>
          </View>

          {/* DIVIDER */}
          <View style={styles.divider} />

          {/* ROW 2 */}
          <View style={styles.row}>
            <View style={[styles.item, styles.leftItem]}>
              <Text style={styles.label}>Mandal</Text>
              <Text style={styles.value}>Kompalle</Text>
            </View>

            <View style={[styles.item, styles.rightItem]}>
              <Text style={styles.label}>Village</Text>
              <Text style={styles.value}>Dulapally</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ContactInfoCard;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    marginTop: 15,
  },

  borderGradient: {
    borderRadius: 20,
    padding: 1.2,
  },

  container: {
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: COLORS.card,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  item: {
    flex: 1,
  },

  leftItem: {
    paddingRight: 10,
  },

  rightItem: {
    paddingLeft: 10,
    alignItems: 'flex-end',
  },

  label: {
    color: COLORS.textTertiary,
    fontSize: 11,
    marginBottom: 3,
    letterSpacing: 0.3,
    fontWeight: '500',
  },

  value: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.borderSoft,
    marginVertical: 10,
  },
});
