// Components
import { Text, YStack } from 'tamagui';
import AppointmentsCard from '../appointments_card/appointments_card';
import { FlatList } from 'react-native';

// Content
import { APPOINTSMENT_CONTENT } from '../../content/appointsments.content';

export default function Appointments() {
  return (
    <YStack
      alignSelf='stretch'
      marginHorizontal='$32'
      alignContent='center'
      gap='$15'
    >
      <Text color='$gray-200' fontSize='$14' fontWeight='500'>
        Compromissos homologados
      </Text>

      <FlatList
        horizontal={true}
        data={APPOINTSMENT_CONTENT}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ index, item }) => (
          <AppointmentsCard
            key={index}
            date={item.date}
            description={item.description}
            priority={item.priority}
          />
        )}
      />
    </YStack>
  );
}
