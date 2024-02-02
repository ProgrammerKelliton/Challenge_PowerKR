// Icons
import { ChevronRight } from '@tamagui/lucide-icons';

// Components
import { Text, View } from 'tamagui';

// Types
import { SettingOptionRedirectProps } from '../../types/components/setting_option.types';

export default function Redirect({ text }: SettingOptionRedirectProps) {
  return (
    <View flexDirection='row' gap='$15'>
      <Text color={'$gray-200'} fontSize={'$14'}>
        {text}
      </Text>
      <ChevronRight color={'$gray-200'} />
    </View>
  );
}
