// Expo
import { Link } from 'expo-router';

// Components
import { Image, Text, YStack } from 'tamagui';

// Types
import TabItemProps from '../../types/components/tab_item.types';

export default function TabItem({ iconPATH, tabName }: TabItemProps) {
  return (
    <YStack alignItems='center' justifyContent='center' gap='$4'>
      <Image source={iconPATH} />
      <Text
        textAlign='center'
        fontWeight='400'
        color='$gray-200'
        fontSize='$10'
      >
        {tabName}
      </Text>
    </YStack>
  );
}
