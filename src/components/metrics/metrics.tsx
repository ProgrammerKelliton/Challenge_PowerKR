// Components
import { ScrollView, Text, XStack, YStack } from 'tamagui';
import CircularProgress from '../circular_progress/circular_progress';

export default function Metrics() {
  return (
    <YStack
      alignSelf='stretch'
      marginHorizontal='$32'
      alignContent='center'
      gap='$15'
    >
      <Text color='$gray-200' fontSize='$14' fontWeight='500'>
        Métricas
      </Text>

      <YStack gap='$15'>
        <XStack justifyContent='space-between'>
          <CircularProgress text='Assumidos' />
          <CircularProgress text='Realizados' />
        </XStack>

        <XStack justifyContent='space-between'>
          <CircularProgress text='Pontos' />
          <CircularProgress text='Pontuação Média' />
        </XStack>

        <XStack justifyContent='space-between'>
          <CircularProgress text='Execução' />
          <CircularProgress text='Desempenho Médio' />
        </XStack>
      </YStack>
    </YStack>
  );
}
