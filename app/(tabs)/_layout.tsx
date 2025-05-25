import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Platform, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import type { SharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 4;

const TabBarZigzagCurve = ({ translateX }: { translateX: SharedValue<number> }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 90,
          width: TAB_WIDTH,
          zIndex: 1,
        },
        animatedStyle,
      ]}
    >
      <Svg width={TAB_WIDTH} height={90} viewBox={`0 0 ${TAB_WIDTH} 90`}>
        <Path
          d={`
            M0,90
            C${TAB_WIDTH * 0.1},50 ${TAB_WIDTH * 0.4},0 ${TAB_WIDTH / 2},0
            C${TAB_WIDTH * 0.6},0 ${TAB_WIDTH * 0.9},50 ${TAB_WIDTH},90
            L0,90
            Z
          `}
          fill={Colors.primary}
        />
      </Svg>
    </Animated.View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = Colors.white;
  const inactiveColor = Colors.white;
  const backgroundColor = Colors.primary;
  const translateX = useSharedValue(0);

  const handleTabPress = (index: number) => {
    translateX.value = withTiming(index * TAB_WIDTH, { duration: 300 });
  };

  const createTabBarIcon = (source: any, index: number) => {
    return ({ focused }: any) => {
      if (focused) handleTabPress(index);

      return focused ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -40,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primary,
              padding: 14,
              borderRadius: 999,
              borderWidth: 4,
              borderColor: Colors.white,
              elevation: 8,
            }}
          >
            <Image
              source={source}
              style={{
                width: 24,
                height: 24,
                tintColor: activeColor,
              }}
            />
          </View>
        </View>
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={source}
            style={{ width: 24, height: 24, tintColor: inactiveColor }}
          />
        </View>
      );
    };
  };

  return (
    <>
      <TabBarZigzagCurve translateX={translateX} />

      <Tabs
        screenOptions={({ route }) => {
          const index = ['index', 'reminder', 'notes', 'timeZones'].indexOf(
            route.name.toLowerCase()
          );

          return {
            tabBarActiveTintColor: activeColor,
            tabBarInactiveTintColor: inactiveColor,
            headerShown: false,

            tabBarButton: (props) => {
              if (props.accessibilityState?.selected) {
                translateX.value = withTiming(index * TAB_WIDTH, { duration: 300 });
              }
              return <HapticTab {...props} />;
            },

            tabBarBackground: () => (
              <View
                style={{
                  backgroundColor: backgroundColor,
                  height: Platform.OS === 'ios' ? 100 : 90,
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  borderTopLeftRadius: 36,
                  borderTopRightRadius: 36,
                  overflow: 'hidden',
                }}
              />
            ),

            tabBarStyle: {
              backgroundColor: 'transparent',
              position: 'absolute',
              height: Platform.OS === 'ios' ? 100 : 90,
              borderTopWidth: 0,
              overflow: 'visible',
            },

            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: '600',
              marginTop: 4,
              marginBottom: Platform.OS === 'ios' ? 0 : 4,
            },

            tabBarItemStyle: {
              paddingVertical: 8,
            },

            tabBarIcon: createTabBarIcon(
              route.name === 'index'
                ? require('@/assets/images/home.png')
                : route.name === 'reminder'
                ? require('@/assets/images/reminder.png')
                : route.name === 'notes'
                ? require('@/assets/images/notes.png')
                : require('@/assets/images/clock.png'),
              index
            ),
          };
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="reminder" options={{ title: 'Reminder' }} />
        <Tabs.Screen name="notes" options={{ title: 'Notes' }} />
        <Tabs.Screen name="timeZones" options={{ title: 'Time Zones' }} />
      </Tabs>
    </>
  );
}
