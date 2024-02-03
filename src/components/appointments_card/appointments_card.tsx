// Components
import { Image, Paragraph, Text, View, XStack } from 'tamagui';
import Container from '../container/container';

// Constants
import {
  CALENDAR_ICON,
  CARET_UP_ICON,
  CHAT_YELLOW_ICON,
} from '../../../constants/icons';

// Types
import AppointmentsCardProps from '../../types/components/appointments_card.types';

export default function AppointmentsCard({
  date,
  description,
  priority,
}: AppointmentsCardProps) {
  let dateFormated = `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short',
  })}`;

  return (
    <Container
      props={{ width: '$240', flexDirection: 'column', padding: '$24' }}
    >
      <Paragraph>{description}</Paragraph>

      <XStack gap='$15' justifyContent='space-between'>
        <Image source={CHAT_YELLOW_ICON} />

        <XStack gap='$4'>
          <Image source={CALENDAR_ICON} />
          <Text fontSize='$12'>{dateFormated}</Text>
        </XStack>

        <View
          bg={'$white'}
          alignItems='center'
          justifyContent='center'
          paddingVertical='$4'
          paddingHorizontal='$9'
          borderRadius='$full'
          flexDirection='row'
          gap='$4'
        >
          <Image source={CARET_UP_ICON} />
          <Text
            color={'$green'}
            fontSize='$12'
            fontWeight={'500'}
            textTransform='capitalize'
          >
            {priority}
          </Text>
        </View>
      </XStack>
    </Container>
  );
}
