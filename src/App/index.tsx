import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {MyAppTheme} from '../theme';
import AppNavigators from './routes';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = MyAppTheme[isDarkMode ? 'dark' : 'default'];

  return (
    <NavigationContainer theme={theme}>
      <AppNavigators />
    </NavigationContainer>
  );
}
export default App;
