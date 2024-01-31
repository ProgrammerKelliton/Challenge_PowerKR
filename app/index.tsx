import { Text } from '@tamagui/core';
import { useFonts } from 'expo-font';

import { useEffect } from 'react';
import { YStack } from 'tamagui';

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
    <YStack
      bg={'$background'}
      f={1}
      alignItems='center'
      justifyContent='center'
    >
      <Text color={'$color'}>Hello world</Text>
    </YStack>
  );
}
