import { DefaultTheme } from 'react-native-paper';

const tema = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    primary: '#1E90FF',
    accent: '#E98A15',
    text: '#000000',
    disabled: "#8AA29E"
  },
};

export default tema;