import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'react-native';
import {MyAppTheme, useCustomTheme} from '../theme';
import AppNavigators from './routes';

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = MyAppTheme['dark'];

  return (
    <NavigationContainer theme={theme}>
      <AppNavigators />
    </NavigationContainer>
  );
}
export default App;
