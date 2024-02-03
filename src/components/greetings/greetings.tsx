// Components
import { Text, XStack } from 'tamagui';
import Selector from '../selector/selector';

export default function Greetings() {
  return (
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
  );
}
