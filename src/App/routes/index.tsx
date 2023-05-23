import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigation from './Home';
import AppConfig from '../Notifications/AppConfig';

//set up routes
const RootStack = createNativeStackNavigator<any>();

function AppNavigators() {
  return (
    <RootStack.Navigator
      initialRouteName={'home'}
      screenOptions={{headerShown: false, autoHideHomeIndicator: true}}>
      <RootStack.Screen name={'home'} component={HomeNavigation} />
      <RootStack.Group
        screenOptions={{
          headerShown: true,
          title: 'Cài đặt ứng dụng',
        }}>
        <RootStack.Screen name={'appSelect'} component={AppConfig} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppNavigators;
