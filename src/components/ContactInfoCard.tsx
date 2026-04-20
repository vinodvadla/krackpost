import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/colors';

const ContactInfoCard = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 2600,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 250],
  });

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#B48811', '#EBD197', '#B48811']}
        style={styles.borderGradient}
      >
        {/* ✨ SHIMMER */}
        <Animated.View
          pointerEvents="none"
          style={[styles.shimmer, { transform: [{ translateX }] }]}
        >
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.35)', 'transparent']}
            style={styles.shimmerInner}
          />
        </Animated.View>

        {/* 🧱 CONTENT */}
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
    overflow: 'hidden',
  },

  container: {
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(12,13,11,0.96)',
  },

  shimmer: {
    position: 'absolute',
    width: 100,
    height: '100%',
    top: 0,
    left: 0,
  },

  shimmerInner: {
    flex: 1,
    opacity: 0.35,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 🔥 key fix
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
    color: COLORS.textGold,
    fontSize: 11,
    marginBottom: 3,
    letterSpacing: 0.3,
  },

  value: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(180,136,17,0.25)',
    marginVertical: 10,
  },
});
