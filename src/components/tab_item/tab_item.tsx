// Expo
import { Link } from 'expo-router';

// Components
import { Image, Text, YStack } from 'tamagui';

// Types
import TabItemProps from '../../types/tab_item.types';

export default function TabItem({ href, iconPATH, tabName }: TabItemProps) {
  return (
    <Link href={`:${href}`}>
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
    </Link>
  );
}
