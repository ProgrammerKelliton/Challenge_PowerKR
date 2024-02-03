// Expo
import { Drawer } from 'expo-router/drawer';
import { useNavigation } from 'expo-router';

// Components
import { Button, Image } from 'tamagui';

// Constants
import { BELL_ICON } from '../../../constants/icons';

// Icons
import { Menu } from '@tamagui/lucide-icons';

// React Native
import { DrawerActions } from '@react-navigation/native';

export default function LayoutDrawer() {
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: { display: 'none' },
        headerBackgroundContainerStyle: {
          backgroundColor: '#121926',
        },
        headerRight: () => (
          <Button asChild>
            <Image source={BELL_ICON} marginRight='$32' />
          </Button>
        ),
        headerLeft: () => (
          <Button
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
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
