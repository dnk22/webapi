import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  AppState,
  View,
  Pressable,
} from 'react-native';
import RNAndroidNotificationListener from 'react-native-android-notification-listener';
import styles from './styles';
import Form from './Form';
import Recent from './Recent';
import {useCustomTheme} from '../../theme';
import {useNavigation} from '@react-navigation/native';

function Notifications() {
  const {colors} = useCustomTheme();
  const [hasPermission, setHasPermission] = useState(false);
  const navigation = useNavigation<any>();
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

  const onNavigateAppConfig = () => {
    navigation.navigate('appSelect');
  };

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
      <Pressable
        style={[styles.appSelect, {backgroundColor: colors.surface}]}
        onPress={onNavigateAppConfig}>
        <Text style={{color: colors.text}}>Cài đặt ứng dụng</Text>
        <Text style={{fontSize: 18, color: colors.text}}>›</Text>
      </Pressable>
      <Recent />
    </SafeAreaView>
  );
}

export default Notifications;
