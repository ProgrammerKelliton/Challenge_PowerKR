// Components
import { Image, Text, XStack } from 'tamagui';

// Types
import SwitchItemProps from '../../types/components/switch_item.types';

export default function SwitchItem({
  name,
  pathIcon,
  isSelect,
  onPress,
}: SwitchItemProps) {
  const borderColor = isSelect ? '$gray-400' : 'transparent';
  const backgroundColor = isSelect ? '$gray-950' : 'transparent';

  return (
    <XStack
      borderColor={borderColor}
      paddingHorizontal='$48'
      bg={backgroundColor}
      borderRadius={'$full'}
      paddingVertical='$9'
      borderWidth='$1'
      onPress={onPress}
      gap='$9'
    >
      <Image source={pathIcon} />
      <Text>{name}</Text>
    </XStack>
  );
}
