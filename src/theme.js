import { DefaultTheme } from 'react-native-paper';

const tema = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#D5F4E0',
    primary: '#57A773',
    accent: '#E98A15',
    text: '#000000',
    disabled: "#8AA29E"
  },
};

export default tema;