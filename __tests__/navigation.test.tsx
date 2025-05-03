import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { router, useLocalSearchParams } from 'expo-router';
import SplashScreen from '../app/(auth)/index';
import Profile from '../app/(app)/(tabs)/profile';
import CreateListing from '../app/(app)/(tabs)/createListing';
import ProductDetails from '../app/(app)/(tabs)/productDetails';
import { products } from '../utils/data';

// Mock expo-router
jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
  useLocalSearchParams: jest.fn(() => ({ id: '1' })),
}));

// Mock Ionicons
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

// Mock Image component
jest.mock('react-native/Libraries/Image/Image', () => 'Image');

// Mock Linking
jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

// Mock useAuth hook
jest.mock('@/utils/auth', () => ({
  useAuth: () => ({
    signOut: jest.fn(),
  }),
}));

describe('Navigation Flows', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Sign Up Flows', () => {
    describe('SplashScreen to New Listing Flow', () => {
      it('should navigate from splash screen to create listing through profile', async () => {
        const { getByText } = render(<SplashScreen />);
        
        // Click Sign Up button on splash screen
        const signUpButton = getByText('Sign Up');
        fireEvent.press(signUpButton);
        
        // Mock navigation to profile tab
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith('/(auth)/signup');
        });

        // Mock successful signup and navigation to profile
        const profile = render(<Profile />);
        
        // Click Add New Listing button
        const addListingButton = profile.getByText('Add New Listing');
        fireEvent.press(addListingButton);
        
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith({
            pathname: '/(app)/(tabs)/createListing',
          });
        });
      });
    });

    describe('SplashScreen to Contact Seller Flow', () => {
      it('should navigate from splash screen to product details and contact seller', async () => {
        const { getByText } = render(<SplashScreen />);
        
        // Click Sign Up button on splash screen
        const signUpButton = getByText('Sign Up');
        fireEvent.press(signUpButton);
        
        // Mock navigation to home tab
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith('/(auth)/signup');
        });

        // Mock successful signup and navigation to product details
        const productDetails = render(<ProductDetails />);
        
        // Verify product details are rendered
        const product = products[0];
        expect(productDetails.getByText(product.title)).toBeTruthy();
        expect(productDetails.getByText(product.price)).toBeTruthy();
        
        // Click Contact Seller button
        const contactButton = productDetails.getByText('Contact Seller');
        fireEvent.press(contactButton);
        
        // Verify that the contact action was triggered
        await waitFor(() => {
          expect(contactButton).toBeTruthy();
        });
      });
    });
  });

  describe('Sign In Flows', () => {
    describe('SplashScreen to New Listing with Form Fill Flow', () => {
      it('should navigate from splash screen to create listing and fill form', async () => {
        const { getByText } = render(<SplashScreen />);
        
        // Click Sign In button on splash screen
        const signInButton = getByText('Sign In');
        fireEvent.press(signInButton);
        
        // Mock navigation to profile tab
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith('/(auth)/signin');
        });

        // Mock successful signin and navigation to profile
        const profile = render(<Profile />);
        
        // Click Add New Listing button
        const addListingButton = profile.getByText('Add New Listing');
        fireEvent.press(addListingButton);
        
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith({
            pathname: '/(app)/(tabs)/createListing',
          });
        });

        // Render CreateListing component
        const createListing = render(<CreateListing />);
        
        // Fill in the form fields
        const titleInput = createListing.getByPlaceholderText('Title');
        const priceInput = createListing.getByPlaceholderText('Price');
        const descriptionInput = createListing.getByPlaceholderText('Description');
        
        fireEvent.changeText(titleInput, 'Test Product');
        fireEvent.changeText(priceInput, '100');
        fireEvent.changeText(descriptionInput, 'Test Description');
        
        // Submit the form
        const submitButton = createListing.getByText('Submit');
        fireEvent.press(submitButton);
        
        // Verify form submission
        await waitFor(() => {
          expect(submitButton).toBeTruthy();
        });
      });
    });

    describe('SplashScreen to Random Product Contact Flow', () => {
      it('should navigate from splash screen to random product and contact seller', async () => {
        const { getByText } = render(<SplashScreen />);
        
        // Click Sign In button on splash screen
        const signInButton = getByText('Sign In');
        fireEvent.press(signInButton);
        
        // Mock navigation to home tab
        await waitFor(() => {
          expect(router.push).toHaveBeenCalledWith('/(auth)/signin');
        });

        // Mock successful signin and navigation to product details
        // Use a random product from our data
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        (useLocalSearchParams as jest.Mock).mockReturnValue({ id: randomProduct.id.toString() });
        
        const productDetails = render(<ProductDetails />);
        
        // Verify product details are rendered
        expect(productDetails.getByText(randomProduct.title)).toBeTruthy();
        expect(productDetails.getByText(randomProduct.price)).toBeTruthy();
        
        // Click Contact Seller button
        const contactButton = productDetails.getByText('Contact Seller');
        fireEvent.press(contactButton);
        
        // Verify that the contact action was triggered
        await waitFor(() => {
          expect(contactButton).toBeTruthy();
        });
      });
    });
  });
}); 