import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  Button,
  AppState,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import RNAndroidNotificationListener from 'react-native-android-notification-listener';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Notification from './Item';
let interval: any = null;

function Notifications() {
  const [hasPermission, setHasPermission] = useState(false);
  const [lastNotification, setLastNotification] = useState<any>(null);

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

  const handleCheckNotificationInterval = async () => {
    const lastStoredNotification = await AsyncStorage.getItem(
      '@lastNotification',
    );

    if (lastStoredNotification) {
      /**
       * As the notification is a JSON string,
       * here I just parse it
       */
      setLastNotification(JSON.parse(lastStoredNotification));
    }
  };

  useEffect(() => {
    clearInterval(interval);
    /**
     * Just setting a interval to check if
     * there is a notification in AsyncStorage
     * so I can show it in the application
     */
    interval = setInterval(handleCheckNotificationInterval, 3000);

    const listener = AppState.addEventListener('change', handleAppStateChange);

    handleAppStateChange('', true);

    return () => {
      clearInterval(interval);
      listener.remove();
    };
  }, []);

  const hasGroupedMessages =
    lastNotification &&
    lastNotification.groupedMessages &&
    lastNotification.groupedMessages.length > 0;

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
      <View style={styles.appConfig}>
        <Text style={styles.appViewTitle}>Chọn app muốn nhận thông báo</Text>
        <View style={styles.appView}>
        </View>
      </View>
      <View style={styles.notificationsWrapper}>
        <Text>Thông báo gần đây</Text>
        {lastNotification && !hasGroupedMessages && (
          <ScrollView style={styles.scrollView}>
            <Notification {...lastNotification} />
          </ScrollView>
        )}
        {lastNotification && hasGroupedMessages && (
          <FlatList
            data={lastNotification.groupedMessages}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <Notification app={lastNotification.app} {...item} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Notifications;
