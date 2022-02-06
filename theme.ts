import { DefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const theme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#1E1C59',
    accent: '#D91E41',
  },
};