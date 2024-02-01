// React
import { useState } from 'react';

// Components
import { XStack } from 'tamagui';
import SwitchItem from '../switch_item/switch_item';

export default function Switch() {
  const [isSelectedPersonal, setIsSelectedPersonal] = useState(true);

  return (
    <XStack
      justifyContent='space-between'
      alignSelf='stretch'
      marginHorizontal='$32'
    >
      <SwitchItem
        name='Pessoal'
        isSelect={isSelectedPersonal}
        onPress={() => setIsSelectedPersonal((prev) => !prev)}
      />
      <SwitchItem
        name='Geral'
        isSelect={!isSelectedPersonal}
        onPress={() => setIsSelectedPersonal((prev) => !prev)}
      />
    </XStack>
  );
}
