import {memo, useEffect, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {AppStorage, load, save} from '../../../services/mmkv';
import styles from './styles';
import {APP_PARAMS} from '../../../constants';
import {useCustomTheme} from '../../../theme';

const defaultAppParams = {
  chat_id: '-991382015',
  domain: 'api.ukm.vn',
};

function Form() {
  const {colors} = useCustomTheme();
  const [isEditMode, setIsEditMode] = useState(false);
  const [appParams, setAppParams] = useState({
    chat_id: '',
    domain: '',
  });

  useEffect(() => {
    const appParams = load(APP_PARAMS);
    if (appParams) {
      setAppParams({
        ...appParams,
      });
    }
  }, []);

  useEffect(() => {
    if (!load(APP_PARAMS)) {
      save(APP_PARAMS, defaultAppParams);
    }
  }, []);

  const onCancel = () => {
    setIsEditMode(false);
  };

  const onEdit = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    }
    AppStorage.set(APP_PARAMS, JSON.stringify(appParams));
    setIsEditMode(false);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View>
        <Text style={{marginLeft: 10, color: colors.text}}>Chat Id</Text>
        <TextInput
          value={appParams.chat_id}
          placeholder="Vui lòng điền chat id"
          onChangeText={text => setAppParams({...appParams, chat_id: text})}
          editable={isEditMode}
          placeholderTextColor={colors.text}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.text,
            color: colors.text,
          }}
        />
      </View>
      <Text style={{marginLeft: 10, color: colors.text}}>Domain</Text>
      <TextInput
        value={appParams.domain}
        placeholder="Vui lòng điền domain"
        onChangeText={text => setAppParams({...appParams, domain: text})}
        placeholderTextColor={colors.text}
        editable={isEditMode}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 10,
          borderColor: colors.text,
          color: colors.text,
        }}
      />
      <View style={styles.action}>
        {isEditMode && (
          <Pressable style={styles.button} onPress={onCancel}>
            <Text style={{color: colors.text}}>Hủy</Text>
          </Pressable>
        )}
        <Pressable style={[styles.button, styles.primary]} onPress={onEdit}>
          <Text style={{color: 'white'}}>{isEditMode ? 'Lưu' : 'Sửa'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default memo(Form);
