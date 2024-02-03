// Components
import { Label, View } from 'tamagui';

// Types
import { SettingOptionRootProps } from '../../types/components/setting_option.types';

export default function Root({ children, label }: SettingOptionRootProps) {
  return (
    <View
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Label fontSize={'$14'}>{label}</Label>
      {children}
    </View>
  );
}
