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
          <CircularProgress />
          <CircularProgress />
        </XStack>

        <XStack justifyContent='space-between'>
          <CircularProgress />
          <CircularProgress />
        </XStack>
      </YStack>
    </YStack>
  );
}
