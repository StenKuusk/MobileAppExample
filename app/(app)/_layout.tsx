import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/utils/auth';

export default function AppLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/signin" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
} 