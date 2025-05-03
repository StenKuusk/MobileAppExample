import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Tabs
        screenOptions={({ route }: { route: any }) => ({
          tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

            if (route.name === 'index') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: { backgroundColor: '#fff' },
          contentStyle: { backgroundColor: '#fff' }
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
        <Tabs.Screen
          name="productDetails"
          options={{
            href: null,
            tabBarStyle: { display: 'none' }
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="createListing"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="indexStyle"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="favoritesStyle"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profileStyle"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="productsDetailsStyle"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="settingsStyle"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="createListingStyle"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
} 