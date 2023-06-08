import {ScrollView, Text, View} from 'react-native';
import Notification from './Item';
import styles from '../styles';
import {useEffect, useState} from 'react';
import {AppStorage, load} from '../../../services/mmkv';
import {useCustomTheme} from '../../../theme';

function NotificationRecent() {
  const [lastNotification, setLastNotification] = useState<any>(null);
  const {colors} = useCustomTheme();

  useEffect(() => {
    const listener = AppStorage.addOnValueChangedListener(changedKey => {
      const notifications = AppStorage.getString('notifications');
      if (notifications) {
        setLastNotification(JSON.parse(load('notifications')));
      }
    });
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    if (AppStorage.getString('notifications')) {
      setLastNotification(JSON.parse(load('notifications')));
    }
  }, []);

  useEffect(() => {
    const data = lastNotification;
    delete data?.icon;
  }, [lastNotification]);

  return (
    <View style={styles.notificationsWrapper}>
      <Text style={{color: colors.text}}>Thông báo gần đây</Text>
      {!lastNotification ? (
        <View
          style={[
            styles.notificationWrapper,
            {backgroundColor: colors.surface, alignItems: 'center'},
          ]}>
          <Text>Không có thông báo nào</Text>
        </View>
      ) : (
        <Notification {...lastNotification} colors={colors} is />
      )}
    </View>
  );
}
export default NotificationRecent;
