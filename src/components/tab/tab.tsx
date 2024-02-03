// Components
import { XStack } from 'tamagui';
import TabItem from '../tab_item/tab_item';
import { Link } from 'expo-router';

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
      <Link href={'/home/'}>
        <TabItem tabName='Home' iconPATH={HOUSE_ICON} />
      </Link>

      <Link href={'/home/'}>
        <TabItem tabName='Compromissos' iconPATH={ALIGHTOP_ICON} />
      </Link>

      <Link href={'/home/'}>
        <TabItem tabName='Comitês' iconPATH={CHAT_ICON} />
      </Link>

      <Link href={'/profile/'}>
        <TabItem tabName='Perfil' iconPATH={USER_ICON} />
      </Link>
    </XStack>
  );
}
