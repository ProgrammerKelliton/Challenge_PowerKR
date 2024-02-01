// Expo
import { useFonts } from 'expo-font';

// React
import { useEffect } from 'react';

// React Native
import { ImageBackground } from 'react-native';

// Components
import { Image, View, YStack, Text, Paragraph } from 'tamagui';
import FormLogin from '../components/form/form';

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
      style={{ flex: 1 }}
    >
      <YStack f={1} justifyContent='space-between' marginTop='$large'>
        <View alignItems='center' gap='$48'>
          <Image source={BRAND_IMAGE} />
          <Image source={PARTNERSHIPS} />
        </View>

        <YStack gap='$32'>
          <View marginHorizontal={'$24'}>
            <Text color={'$white'} fontSize={24} fontWeight={'700'}>
              Bem-vindo de volta!
            </Text>
            <Paragraph fontWeight={'400'} color={'$slate'}>
              Preparado para mais uma jornada?
            </Paragraph>
          </View>

          <FormLogin />
        </YStack>
      </YStack>
    </ImageBackground>
  );
}
