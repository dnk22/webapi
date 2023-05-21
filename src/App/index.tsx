import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from './Notifications';
import ImagePicker from './ImagePicker';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Notification"
          options={{
            title: 'Thông báo',
          }}
          component={Notifications}
        />
        <Tab.Screen
          name="Image"
          options={{
            title: 'Chọn ảnh',
          }}
          component={ImagePicker}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
