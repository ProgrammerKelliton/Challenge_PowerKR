// Types
import { InputProps } from '../../types/components/input.types';

// Components
import { Label, Input as InputTamagui, View } from 'tamagui';

export default function Input({
  defaultValue,
  id,
  label,
  children,
  onChangeText,
  props,
}: InputProps) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>

      <View
        bg={'$gray-900'}
        borderRadius={'$12'}
        borderColor={'$gray-400'}
        borderWidth='$1'
        justifyContent='space-between'
        flexDirection='row'
        alignItems='center'
      >
        <InputTamagui
          id={id}
          defaultValue={defaultValue}
          height={'$64'}
          color={'$gray-200'}
          borderColor={'transparent'}
          f={1}
          onChangeText={onChangeText}
          {...props}
        />
        {children}
      </View>
    </>
  );
}
