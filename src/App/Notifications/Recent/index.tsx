import {FlatList, ScrollView, Text, View} from 'react-native';
import Notification from './Item';
import styles from '../styles';
import {useEffect, useState} from 'react';
import {AppStorage, load} from '../../../services/mmkv';
import {useCustomTheme} from '../../../theme';

function Recent() {
  const [lastNotification, setLastNotification] = useState<any>(null);
  const {colors} = useCustomTheme();

  useEffect(() => {
    const listener = AppStorage.addOnValueChangedListener(changedKey => {
      const notifications = AppStorage.getString('notifications');
      if (notifications) {
        setLastNotification(JSON.parse(notifications));
      }
    });
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    if (load('notifications')) {
      setLastNotification(JSON.parse(load('notifications')));
    }
  }, [load('notifications')]);

  const hasGroupedMessages =
    lastNotification &&
    lastNotification.groupedMessages &&
    lastNotification.groupedMessages.length > 0;

  return (
    <View style={styles.notificationsWrapper}>
      <Text style={{color: colors.text}}>Thông báo gần đây</Text>
      {lastNotification && !hasGroupedMessages && (
        <ScrollView style={styles.scrollView}>
          <Notification {...lastNotification} colors={colors} />
        </ScrollView>
      )}
      {lastNotification && hasGroupedMessages && (
        <FlatList
          data={lastNotification.groupedMessages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Notification
              app={lastNotification.app}
              {...item}
              colors={colors}
            />
          )}
        />
      )}
    </View>
  );
}
export default Recent;
