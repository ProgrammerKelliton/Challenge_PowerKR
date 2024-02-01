// React Native
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export default interface SwitchItemProps {
  name: string;
  pathIcon?: ImageSourcePropType;
  isSelect?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
