import {memo, useEffect, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {AppStorage, load, save} from '../../../services/mmkv';
import styles from './styles';
import {APP_PARAMS} from '../../../constants';
import Support from '../../Support';

function Form() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [appParams, setAppParams] = useState({
    chat_id: '-991382015',
    domain: 'api.ukm.vn',
  });

  useEffect(() => {
    if (isEditMode) {
      const appParams = load(APP_PARAMS);
      if (appParams) {
        setAppParams({
          ...appParams,
        });
      }
    }
  }, [isEditMode]);

  useEffect(() => {
    if (!load(APP_PARAMS)) {
      save(APP_PARAMS, {
        chat_id: '-991382015',
        domain: 'api.ukm.vn',
      });
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
    <View style={styles.container}>
      <View>
        <Text style={{marginLeft: 10}}>Chat Id</Text>
        <TextInput
          value={appParams.chat_id}
          placeholder="Vui lòng điền chat id"
          onChangeText={text => setAppParams({...appParams, chat_id: text})}
          placeholderTextColor={'gray'}
          editable={isEditMode}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{marginLeft: 10}}>Domain</Text>
      <TextInput
        value={appParams.domain}
        placeholder="Vui lòng điền domain"
        onChangeText={text => setAppParams({...appParams, domain: text})}
        placeholderTextColor={'gray'}
        editable={isEditMode}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 10,
        }}
      />
      <View style={styles.action}>
        <Support />
        <>
          {isEditMode && (
            <Pressable style={styles.button} onPress={onCancel}>
              <Text>Hủy</Text>
            </Pressable>
          )}
          <Pressable style={[styles.button, styles.primary]} onPress={onEdit}>
            <Text style={{color: 'white'}}>{isEditMode ? 'Lưu' : 'Sửa'}</Text>
          </Pressable>
        </>
      </View>
    </View>
  );
}
export default memo(Form);
