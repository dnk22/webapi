import {ScrollView, Text, View} from 'react-native';
import styles from '../styles';
import {useEffect, useState} from 'react';
import {AppStorage, load} from '../../../services/mmkv';
import {useCustomTheme} from '../../../theme';
import {RECENT_API_CALLED} from '../../../constants';

function APIRecent() {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const {colors} = useCustomTheme();

  useEffect(() => {
    const listener = AppStorage.addOnValueChangedListener(changedKey => {
      const apiResponse = AppStorage.getString(RECENT_API_CALLED);
      if (apiResponse) {
        setApiResponse(JSON.parse(JSON.parse(apiResponse)));
      }
    });
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    const apiCall = AppStorage.getString(RECENT_API_CALLED);
    if (apiCall) {
      setApiResponse(JSON.parse(JSON.parse(apiCall)));
    }
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
          {!apiResponse ? (
            <Text>Không có data</Text>
          ) : (
            <>
              <Text style={{color: colors.text}}>
                Thời gian : {apiResponse?.time}
              </Text>
              <Text style={{color: colors.text}}>
                Trạng thái : {apiResponse?.status}
              </Text>
              <Text style={{color: colors.text}}>
                Nội dung : {apiResponse?.content}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
export default APIRecent;
