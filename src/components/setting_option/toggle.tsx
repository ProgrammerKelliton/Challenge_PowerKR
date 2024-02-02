// Components
import { Switch } from 'tamagui';

export default function Toggle() {
  return (
    <Switch backgroundColor={'$brand'} size={'$54'}>
      <Switch.Thumb backgroundColor={'$white'} />
    </Switch>
  );
}
