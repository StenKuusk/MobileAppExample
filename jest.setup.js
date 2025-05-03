import '@testing-library/jest-native/extend-expect';

// Mock ImagePicker
jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(),
}));

// Mock SafeAreaView
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
})); 