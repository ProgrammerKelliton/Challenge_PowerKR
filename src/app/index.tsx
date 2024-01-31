// Expo
import { useFonts } from 'expo-font';

// React
import { useEffect } from 'react';

// React Native
import { ImageBackground } from 'react-native';

// Components
import { Image, View, YStack, Text, Paragraph } from 'tamagui';

// Constants
import {
  BACKGROUND_IMAGE,
  BRAND_IMAGE,
  PARTNERSHIPS,
} from '../../constants/images';

export default function Page() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={BACKGROUND_IMAGE}
      resizeMode='cover'
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <YStack f={1} justifyContent='space-around'>
        <View alignItems='center' gap='$8'>
          <Image source={BRAND_IMAGE} />
          <Image source={PARTNERSHIPS} />
        </View>

        <View marginHorizontal={'$4'}>
          <View>
            <Text color={'$color'} fontSize={24} fontWeight={'700'}>
              Bem-vindo de volta!
            </Text>
            <Paragraph fontWeight={'400'}>
              Preparado para mais uma jornada?
            </Paragraph>
          </View>
        </View>
      </YStack>
    </ImageBackground>
  );
}
