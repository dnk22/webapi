import {FlatList, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {memo, useEffect, useState} from 'react';
import AppItem from './AppItem';
import {InstalledApps} from 'react-native-launcher-kit';
import ReactNativeModal from 'react-native-modal';
import Form from './Form';
import {ItemProps} from '../../../types';
import {useCustomTheme} from '../../../theme';

function AppConfig() {
  const {colors} = useCustomTheme();
  const [apps, setApps] = useState([]);
  const [packageName, setPackageName] = useState<ItemProps>({
    packageName: '',
    appName: '',
  });

  useEffect(() => {
    getApplication();
  }, []);

  const getApplication = () => {
    const apps = InstalledApps.getApps();
    setApps(apps);
  };

  const onItemPress = ({
    packageName,
    appName,
  }: {
    packageName: string;
    appName: string;
  }) => {
    setPackageName({
      packageName,
      appName,
    });
  };

  const onHideModal = () => {
    setPackageName({
      packageName: '',
      appName: '',
    });
  };

  const renderItem = ({item}) => (
    <AppItem item={item} onPress={onItemPress} colors={colors} />
  );

  return (
    <View style={styles.appConfig}>
      <Text style={[styles.appViewTitle, {color: colors.text}]}>
        Chọn ứng dụng muốn nhận thông báo
      </Text>
      <View style={[styles.appView, {backgroundColor: colors.surface}]}>
        <FlatList
          data={apps}
          renderItem={renderItem}
          keyExtractor={item => item.packageName + item.label}
        />
      </View>
      <ReactNativeModal
        isVisible={Boolean(packageName.packageName)}
        style={{justifyContent: 'center', alignItems: 'center'}}
        onBackdropPress={onHideModal}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={400}>
        <Form itemDetail={packageName} onCloseModal={onHideModal} />
      </ReactNativeModal>
    </View>
  );
}
export default memo(AppConfig);
