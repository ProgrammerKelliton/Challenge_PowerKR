// Expo
import { Drawer } from 'expo-router/drawer';

// Components
import { Button, Image } from 'tamagui';

// Constants
import { BELL_ICON } from '../../../constants/icons';

// Icons
import { Menu } from '@tamagui/lucide-icons';

export default function LayoutDrawer() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: { display: 'none' },
        headerRight: () => (
          <Button asChild>
            <Image source={BELL_ICON} marginRight='$32' />
          </Button>
        ),
        headerLeft: () => (
          <Button asChild>
            <Menu marginLeft='$32' />
          </Button>
        ),
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
    </Drawer>
  );
}
