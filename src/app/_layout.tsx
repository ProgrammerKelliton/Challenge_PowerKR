// React Native
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

// Expo
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
export { ErrorBoundary } from 'expo-router';

// Styles
import { TamaguiProvider, Text } from 'tamagui';
import { config } from '../../tamagui.config';
import '../../tamagui.css';

// React
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const INITIAL_ROUTE_NAME = '(drawer)';

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName={INITIAL_ROUTE_NAME}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen
            name='(drawer)'
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
