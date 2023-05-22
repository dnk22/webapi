import {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {AppStorage, load} from '../../../services/mmkv';
import {ItemProps} from '../../../types';

export default function Form({
  itemDetail,
  onCloseModal,
}: {
  itemDetail: ItemProps;
  onCloseModal: () => void;
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const [text, onChangeText] = useState('');

  const onCancel = () => {
    onChangeText('');
    setIsEnabled(false);
    onCloseModal();
  };

  useEffect(() => {
    const data = load(itemDetail.packageName);
    if (data) {
      setIsEnabled(data?.isNoti);
      onChangeText(data.username);
    }
  }, [itemDetail.packageName]);

  const onSave = () => {
    const data = {
      isNoti: isEnabled,
      username: text,
    };
    AppStorage.set(itemDetail.packageName, JSON.stringify(data));
    onCloseModal();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Cài đặt {itemDetail.appName}</Text>
        <View style={styles.divider} />
        <View style={{width: '100%'}}>
          <View style={styles.formGroup}>
            <Text>Thông báo</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
          <View style={styles.formInput}>
            <Text>Tên đăng nhập</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.action}>
            <Pressable style={styles.button} onPress={onCancel}>
              <Text>Hủy</Text>
            </Pressable>
            <Pressable
              style={[styles.button, {backgroundColor: '#007bff'}]}
              onPress={onSave}>
              <Text style={{color: 'white'}}>Lưu</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  formGroup: {
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formInput: {
    marginTop: 10,
    rowGap: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    columnGap: 10,
    justifyContent: 'flex-end',
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 15,
    width: 60,
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '90%',
    height: 0.5,
    backgroundColor: 'gray',
    marginTop: 10,
  },
});
