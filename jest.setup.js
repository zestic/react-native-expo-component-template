// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock expo modules if needed
jest.mock('expo-constants', () => ({
  default: {
    expoConfig: {},
  },
}));
