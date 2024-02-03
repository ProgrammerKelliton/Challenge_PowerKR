// Components
import { ScrollView } from 'tamagui';
import Switch from '../../../../components/switch/switch';
import Greetings from '../../../../components/greetings/greetings';
import ProfileCard from '../../../../components/profile_card/profile_card';
import Appointments from '../../../../components/appointments/appointments';
import Metrics from '../../../../components/metrics/metrics';

export default function Home() {
  return (
    <ScrollView
      bg={'$black-2'}
      f={1}
      paddingTop='$88'
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <Greetings />
      <Switch />
      <ProfileCard />
      <Appointments />
      <Metrics />
    </ScrollView>
  );
}
