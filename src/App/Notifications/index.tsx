import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  AppState,
  View,
} from 'react-native';
import RNAndroidNotificationListener from 'react-native-android-notification-listener';
import styles from './styles';
import Form from './Form';
import AppConfig from './AppConfig';
import Recent from './Recent';

function Notifications() {
  const [hasPermission, setHasPermission] = useState(false);

  const handleOnPressPermissionButton = async () => {
    /**
     * Open the notification settings so the user
     * so the user can enable it
     */
    RNAndroidNotificationListener.requestPermission();
  };

  const handleAppStateChange = async (nextAppState: string, force = false) => {
    if (nextAppState === 'active' || force) {
      const status = await RNAndroidNotificationListener.getPermissionStatus();
      setHasPermission(status !== 'denied');
    }
  };


  useEffect(() => {
    const listener = AppState.addEventListener('change', handleAppStateChange);
    handleAppStateChange('', true);
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!hasPermission && (
        <View style={styles.buttonWrapper}>
          <Text
            style={[
              styles.permissionStatus,
              {color: hasPermission ? 'green' : 'red'},
            ]}>
            {hasPermission
              ? 'Đã cho phép nhận thông báo'
              : 'Chưa cho phép nhận thông báo'}
          </Text>
          <Button
            title="Mở cài đặt"
            onPress={handleOnPressPermissionButton}
            disabled={hasPermission}
          />
        </View>
      )}
      <Form />
      <AppConfig />
      <Recent />
    </SafeAreaView>
  );
}

export default Notifications;
