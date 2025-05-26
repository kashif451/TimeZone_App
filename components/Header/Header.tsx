// Header.tsx
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" size={RFValue(28)} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <Image source={require('@/assets/images/bell.png')} style={styles.bellIcon} resizeMode="contain" />
        <Image source={require('@/assets/images/mapicon.png')} style={styles.mapIcon} resizeMode="cover" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    width: 34,
    height: 34,
  },
  mapIcon: {
    width: 44,
    height: 44,
    marginLeft: 4,
  },
});

export default Header;

