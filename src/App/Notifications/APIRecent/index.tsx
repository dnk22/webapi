import {ScrollView, Text, View} from 'react-native';
import styles from '../styles';
import {useEffect, useState} from 'react';
import {AppStorage, load} from '../../../services/mmkv';
import {useCustomTheme} from '../../../theme';
import {RECENT_API_CALLED} from '../../../constants';

function APIRecent() {
  const [apiName, setApiName] = useState<any>(null);
  const {colors} = useCustomTheme();

  useEffect(() => {
    const listener = AppStorage.addOnValueChangedListener(changedKey => {
      const apiName = AppStorage.getString(RECENT_API_CALLED);
      if (apiName) {
        setApiName(JSON.parse(apiName));
      }
    });
    return () => {
      listener.remove();
    };
  }, []);
  useEffect(() => {
    setApiName(AppStorage.getString(RECENT_API_CALLED));
  }, []);

  return (
    <View style={styles.notificationsWrapper}>
      <Text style={{color: colors.text}}>API gọi gần đây</Text>
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            styles.notificationWrapper,
            {backgroundColor: colors.surface},
          ]}>
          <Text style={{color: colors.text}}>{apiName}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default APIRecent;
