// React
import { useState } from 'react';

// Components
import { XStack } from 'tamagui';
import SwitchItem from '../switch_item/switch_item';

// Icons
import { CHART_PIE, USER_ICON } from '../../../constants/icons';

export default function Switch() {
  const [isSelectedPersonal, setIsSelectedPersonal] = useState(true);

  return (
    <XStack gap='$15' alignSelf='stretch' marginHorizontal='$32'>
      <SwitchItem
        name='Pessoal'
        isSelect={isSelectedPersonal}
        onPress={() => setIsSelectedPersonal(true)}
        pathIcon={USER_ICON}
      />
      <SwitchItem
        name='Geral'
        isSelect={!isSelectedPersonal}
        onPress={() => setIsSelectedPersonal(false)}
        pathIcon={CHART_PIE}
      />
    </XStack>
  );
}
