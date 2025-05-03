import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};


export const layout = {
  screenPadding: spacing.lg,
  
  gridSpacing: spacing.sm,
  gridColumns: 2,
  
  getGridItemWidth: () => {
    const totalHorizontalPadding = spacing.lg * 2;
    const totalGridGap = spacing.sm * (2 - 1);
    return (width - totalHorizontalPadding - totalGridGap) / 2;
  },

  borderRadius: spacing.sm,
};

export const aspectRatios = {
  productCard: 220 / ((width - 52) / 2),
}; 