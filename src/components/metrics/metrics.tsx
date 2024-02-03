// Components
import { Text, XStack, YStack } from 'tamagui';
import CircularProgress from '../circular_progress/circular_progress';

export default function Metrics() {
  return (
    <YStack
      alignSelf='stretch'
      marginHorizontal='$32'
      alignContent='center'
      gap='$15'
      paddingBottom='$88'
    >
      <Text color='$gray-200' fontSize='$14' fontWeight='500'>
        Métricas
      </Text>

      <XStack flexWrap='wrap' gap='$15'>
        <CircularProgress text='Assumidos' />
        <CircularProgress text='Realizados' />

        <CircularProgress text='Assumidos' />
        <CircularProgress text='Realizados' />

        <CircularProgress text='Assumidos' />
        <CircularProgress text='Realizados' />
      </XStack>
    </YStack>
  );
}
