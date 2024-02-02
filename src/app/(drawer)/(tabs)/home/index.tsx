// Components
import { YStack } from 'tamagui';
import Switch from '../../../../components/switch/switch';
import Greetings from '../../../../components/greetings/greetings';
import ProfileCard from '../../../../components/profile_card/profile_card';

export default function Home() {
  return (
    <YStack
      bg={'$black-2'}
      f={1}
      justifyContent='center'
      alignItems='center'
      gap='$24'
    >
      <Greetings />
      <Switch />
      <ProfileCard />
    </YStack>
  );
}
