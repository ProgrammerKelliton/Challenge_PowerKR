// Expo
import { Tabs } from 'expo-router/tabs';

// Components
import Tab from '../../../components/tab/tab';

export default function AppLayout() {
  return (
    <Tabs
      tabBar={(props) => {
        return <Tab />;
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name='profile/index'
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
