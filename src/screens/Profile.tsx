import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { ArrowLeft, Pencil, Camera, Crown } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContactInfoCard from '../components/ContactInfoCard';
import ProfileBtn from '../components/ProfileBtn';
import { Trash2 } from 'lucide-react-native';
import { COLORS } from '../theme/colors';
import { IMAGES } from '../theme/images';
import Save from '../assets/svgs/Save.js';
import BriefCase from '../assets/svgs/BriefCase.js';
import Lock from '../assets/svgs/Lock.js';

export const btnsData: any = [
  {
    label: 'Saved Posters',
    type: 'default',
    icon: Save,
  },
  {
    label: 'Subscriptions',
    type: 'default',
    icon: BriefCase,
  },
  {
    label: 'Privacy Policy',
    type: 'default',
    icon: Lock,
  },
  {
    label: 'Delete Account',
    type: 'danger',
    icon: Trash2,
  },
];

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="#BB9B49" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editBtn}>
          <Pencil color="#BB9B49" size={18} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: -40,
        }}
      >
        <ImageBackground
          source={IMAGES.Arch3}
          style={{ flex: 1, width: '100%', height: 175, opacity: 0.8 }}
        ></ImageBackground>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/300' }}
              style={styles.avatar}
            />
          </View>
          <LinearGradient
            colors={['#EBD197', '#B48811', '#A2790D', '#BB9B49']}
            style={styles.cameraBtn}
          >
            <TouchableOpacity>
              <Camera size={16} color="#000" />
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.name}>Yakub Moodu</Text>
          <Text style={styles.subtitle}>
            Janasena • Youth Leader - Jangoan • Telangana
          </Text>
          <LinearGradient
            colors={['#EBD197', '#B48811', '#A2790D', '#BB9B49']}
            style={styles.planBtn}
          >
            <TouchableOpacity activeOpacity={0.8} style={styles.planContent}>
              <Crown size={14} color="#000" style={{ marginRight: 6 }} />
              <Text style={styles.planText}>Pro</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <ContactInfoCard />
        <View>
          {btnsData.map((item: any, index: any) => (
            <ProfileBtn
              key={index}
              label={item.label}
              type={item.type}
              icon={item.icon}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  editBtn: {
    borderWidth: 1,
    borderColor: '#BB9B49',
    padding: 8,
    borderRadius: 8,
  },

  arcContainer: {
    position: 'absolute',
    top: 120,
    width: '100%',
    alignItems: 'center',
  },
  arcGlow: {
    position: 'absolute',
    width: '120%',
    height: 120,
    borderRadius: 100,
    backgroundColor: '#BB9B49',
    opacity: 0.15,
  },
  arcLine: {
    width: '110%',
    height: 120,
    borderTopWidth: 2,
    borderColor: '#BB9B49',
    borderRadius: 200,
  },
  profileContainer: {
    alignItems: 'center',
  },
  planContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarGlow: {
    position: 'absolute',
    width: 125,
    height: 125,
    borderRadius: 65,
    backgroundColor: '#BB9B49',
    opacity: 0.2,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#BB9B49',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  cameraBtn: {
    position: 'absolute',
    right: 140,
    top: 70,
    backgroundColor: '#BB9B49',
    width: 30,
    height: 30,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.background,
    borderWidth: 4,
  },
  name: {
    fontSize: 22,
    color: COLORS.textGold,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 6,
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontSize: 12,
  },
  planBtn: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#BB9B49',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  planText: {
    color: COLORS.background,
    fontWeight: 'bold',
  },
});
