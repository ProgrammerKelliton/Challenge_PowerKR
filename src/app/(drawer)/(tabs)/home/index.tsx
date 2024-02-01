// Components
import { Text, XStack, YStack } from 'tamagui';
import Selector from '../../../../components/selector/selector';
import Switch from '../../../../components/switch/switch';

export default function Home() {
  return (
    <YStack bg={'$black-2'} f={1} justifyContent='center' alignItems='center'>
      <XStack
        justifyContent='space-between'
        alignSelf='stretch'
        marginHorizontal='$32'
        alignContent='center'
      >
        <Text
          fontWeight={'500'}
          fontSize={'$20'}
          lineHeight={'$30'}
          color={'$white'}
        >
          Olá, [usuário]
        </Text>

        <Selector />
      </XStack>

      <Switch />
    </YStack>
  );
}
