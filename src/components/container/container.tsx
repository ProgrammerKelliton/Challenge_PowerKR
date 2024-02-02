// Components
import { View } from 'tamagui';

// Types
import ContainerProps from '../../types/components/container_types';

export default function Container({ children, props }: ContainerProps) {
  return (
    <View
      flexDirection='row'
      gap='$15'
      alignSelf='stretch'
      bg={'$gray-950'}
      padding='$15'
      borderRadius='$24'
      {...props}
    >
      {children}
    </View>
  );
}
