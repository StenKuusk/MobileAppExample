import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { AuthProvider } from '@/utils/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#fff' }
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(app)" />
        </Stack>
      </View>
    </AuthProvider>
  );
}

