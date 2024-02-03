// Components
import { useState } from 'react';
import { Switch } from 'tamagui';

export default function Toggle() {
  const [isCheck, setIsCheck] = useState(true);

  return (
    <Switch
      onCheckedChange={() => setIsCheck((prev) => !prev)}
      backgroundColor={isCheck ? '$brand' : '$gray-950'}
      defaultChecked={isCheck}
    >
      <Switch.Thumb backgroundColor={'$white'} />
    </Switch>
  );
}
