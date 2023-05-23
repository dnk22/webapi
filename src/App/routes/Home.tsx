import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from '../Notifications';
import ImagePicker from '../ImagePicker';
import Support from '../Support';
import {Image} from 'react-native';
import {useCustomTheme} from '../../theme';

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  const {colors} = useCustomTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: colors.surface,
        },
      }}>
      <Tab.Screen
        name="Notification"
        options={{
          title: 'Thông báo',
          tabBarIcon: () => (
            <Image
              source={require('../assets/notification.png')}
              style={{width: 20, height: 20, tintColor: 'white'}}
            />
          ),
        }}
        component={Notifications}
      />
      <Tab.Screen
        name="Image"
        options={{
          title: 'Chọn ảnh',
          tabBarIcon: () => (
            <Image
              source={require('../assets/image-gallery.png')}
              style={{width: 20, height: 20, tintColor: 'white'}}
            />
          ),
        }}
        component={ImagePicker}
      />
      <Tab.Screen
        name="Support"
        options={{
          title: 'Hỗ trợ',
          tabBarIcon: () => (
            <Image
              source={require('../assets/support.png')}
              style={{width: 20, height: 20, tintColor: 'white'}}
            />
          ),
        }}
        component={Support}
      />
    </Tab.Navigator>
  );
}
export default HomeNavigation;