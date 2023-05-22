import {memo} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

type AppItemProps = {
  item: {icon: string; label: string; packageName: string};
  onPress: ({
    packageName,
    appName,
  }: {
    packageName: string;
    appName: string;
  }) => void;
};

function AppItem({item, onPress}: AppItemProps) {
  const appIcon = `data:image/png;base64,${item.icon}`;

  return (
    <TouchableHighlight
      style={styles.appItem}
      onPress={() =>
        onPress({packageName: item.packageName, appName: item.label})
      }
      underlayColor="#d3d3d3bd">
      <>
        <View style={{flex: 1, flexDirection: 'row', columnGap: 10}}>
          <Image source={{uri: appIcon}} style={{width: 22, height: 22}} />
          <Text>{item.label}</Text>
        </View>
        <Text style={{fontSize: 18}}>›</Text>
      </>
    </TouchableHighlight>
  );
}
export default memo(AppItem);
