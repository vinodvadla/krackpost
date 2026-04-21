import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from '../theme/colors';
import SecondaryHeader from '../components/SecondaryHeader';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronsRight, Image } from 'lucide-react-native';
import Button from '../components/Button';

type Props = {
  navigation: any;
};

const Plans = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Header */}
      <SecondaryHeader
        showRightIcon
        onBackPress={() => navigation.goBack()}
        onRightPress={() => console.log('Help')}
        iconColor={COLORS.primary}
        rightIcon={<Text style={{ color: '#fff', fontWeight: 'bold' }}>?</Text>}
        rightGradient={['#61121A', '#551823']}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>VIP Team Plans</Text>
        <Text style={styles.subtitle}>Best for Leaders</Text>
      </View>
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#62121A', '#551823']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.activeCard}
        >
          <View style={styles.toprow}>
            <Text style={styles.activeTitle}>30 Days Plan</Text>
            <Text style={styles.activePrice}>₹8,999</Text>
          </View>
          <Text style={styles.activeSub}>Up to 50 Members</Text>
          <View style={styles.divider} />
          <View style={styles.row}>
            <LinearGradient
              colors={['#FAD27E', '#B48811', '#A2790D']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.iconCircle}
            >
              <Image color={COLORS.primary} size={22} />
            </LinearGradient>
            <View>
              <Text style={styles.featureText}>1 Photo + 1 Video</Text>
              <Text style={styles.featureSub}>Per member/ day</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.card}>
          <View style={styles.toprow}>
            <Text style={styles.titleDark}>90 Days Plan</Text>
            <Text style={styles.priceDark}>₹14,999</Text>
          </View>
          <Text style={styles.subDark}>Up to 100 Members</Text>
          <View style={styles.dividerLight} />
          <View style={styles.row}>
            <View style={styles.iconCircleLight}>
              <Image color={COLORS.primary} size={22}  />
            </View>
            <View>
              <Text style={styles.featureTextDark}>2 Photos + 2 Videos</Text>
              <Text style={styles.featureSub}>Per member/ day</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.toprow}>
            <Text style={styles.titleDark}>1 Year Unlimited</Text>
            <Text style={styles.priceDark}>₹99,000</Text>
          </View>
          <Text style={styles.subDark}>Unlimited Members</Text>
          <View style={styles.dividerLight} />
          <View style={styles.row}>
            <View style={styles.iconCircleLight}>
              <Text style={{ fontSize: 20, color: COLORS.primary,marginBottom:5 ,fontWeight:'800'}}>∞</Text>
            </View>
            <View>
              <Text style={styles.featureTextDark}>Unlimited</Text>
              <Text style={styles.featureSub}>Downloads Per member</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ctaWrapper}>
        <Button
          title="Get Team Access"
          onPress={() => console.log('Get Team Access')}
          rightIcon={<ChevronsRight color={COLORS.primary} size={26} />}
        />
      </View>
    </View>
  );
};

export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textSecondary,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: COLORS.textTertiary,
  },
  cardContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
  activeCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    shadowColor: COLORS.gold,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  toprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  activeTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },

  activePrice: {
    color: '#EBD197',
    fontSize: 20,
    fontWeight: '700',
  },

  activeSub: {
    color: '#EBD197',
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#EBD197',
    marginVertical: 14,
  },

  dividerLight: {
    height: 1,
    backgroundColor: '#E5C07B',
    marginVertical: 14,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EBD197',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  iconCircleLight: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3E6D0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  featureText: {
    color: '#FFF',
    fontWeight: '600',
  },

  featureTextDark: {
    color: '#000',
    fontWeight: '600',
  },

  featureSub: {
    color: '#777',
    fontSize: 12,
  },

  titleDark: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7A1E1E',
  },

  priceDark: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7A1E1E',
  },

  subDark: {
    color: '#777',
    marginTop: 6,
  },

  ctaWrapper: {
    marginTop: 'auto',
    padding: 20,
  },

  ctaBtn: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  ctaText: {
    color: '#7A1E1E',
    fontSize: 16,
    fontWeight: '700',
  },
});
