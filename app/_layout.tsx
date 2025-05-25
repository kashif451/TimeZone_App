import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'), 
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsLightItalic: require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='(tabs)'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onBoardingScreen" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="registerScreen" options={{ headerShown: false }} />
        <Stack.Screen name="forgetPasswordScreen" options={{ headerShown: false }} />
        <Stack.Screen name="verifyCodeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
