// Components
import { XStack } from 'tamagui';
import TabItem from '../tab_item/tab_item';

// Constants
import {
  ALIGHTOP_ICON,
  CHAT_ICON,
  HOUSE_ICON,
  USER_ICON,
} from '../../../constants/icons';

export default function Tab() {
  return (
    <XStack
      paddingHorizontal='$48'
      paddingVertical='$24'
      gap='$32'
      justifyContent='space-between'
    >
      <TabItem href='home' tabName='Home' iconPATH={HOUSE_ICON} />
      <TabItem
        href='compromissos'
        tabName='Compromissos'
        iconPATH={ALIGHTOP_ICON}
      />
      <TabItem href='comitês' tabName='Comitês' iconPATH={CHAT_ICON} />
      <TabItem href='profile' tabName='Perfil' iconPATH={USER_ICON} />
    </XStack>
  );
}
