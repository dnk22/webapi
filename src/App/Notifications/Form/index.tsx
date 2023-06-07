import {memo, useEffect, useMemo, useState} from 'react';
import {Pressable, Switch, Text, TextInput, View} from 'react-native';
import {AppStorage} from '../../../services/mmkv';
import styles from './styles';
import {useCustomTheme} from '../../../theme';

const defaultDomain = 'https://api.ukm.vn/api/callback/appnotification';
const defaultChatId = {
  isActive: false,
  value: '',
};
function Form() {
  const {colors} = useCustomTheme();
  const [isEditMode, setIsEditMode] = useState(false);
  const [domain, setDomain] = useState(defaultDomain);
  const [chatId, setChatId] = useState(defaultChatId);
  const [errors, setErrors] = useState({
    domain: false,
    chatId: false,
  });

  useEffect(() => {
    if (!AppStorage.getBoolean('isHaveDefaultFormData')) {
      setFormData();
      AppStorage.set('isHaveDefaultFormData', true);
    }
  }, []);

  useEffect(() => {
    fetchFormData();
  }, [isEditMode]);

  function fetchFormData() {
    const domainData = AppStorage.getString('domain');
    const chatIdData = AppStorage.getString('chatId');
    if (domainData) {
      setDomain(domainData);
    }
    if (chatIdData) {
      setChatId(JSON.parse(chatIdData));
    }
  }

  /** set errors form */
  useEffect(() => {
    setErrors({...errors, domain: Boolean(!domain)});
  }, [domain]);

  useEffect(() => {
    if (chatId.isActive) {
      setErrors({...errors, chatId: Boolean(!chatId.value)});
    } else {
      setErrors({...errors, chatId: Boolean(chatId.isActive)});
    }
  }, [chatId.value, chatId.isActive]);

  function setFormData() {
    // set domain
    AppStorage.set('domain', domain);
    AppStorage.set('chatId', JSON.stringify(chatId));
  }

  const onCancel = () => {
    setIsEditMode(false);
  };

  const onEdit = () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    }
    setFormData();
    setIsEditMode(false);
  };

  const isDisableSubmit = useMemo(
    () => isEditMode && ((errors.chatId && chatId.isActive) || errors.domain),
    [errors, isEditMode, chatId, domain],
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={styles.itemRow}>
        <View style={styles.itemRowHeader}>
          <Text style={[styles.itemRowTitle, {color: colors.text}]}>
            Domain
          </Text>
        </View>
        <TextInput
          value={domain}
          placeholder="Vui lòng điền domain"
          onChangeText={text => setDomain(text)}
          placeholderTextColor={errors.domain ? 'red' : colors.text}
          editable={isEditMode}
          style={[
            styles.itemRowInput,
            {
              borderColor: errors.domain ? 'red' : colors.text,
              color: colors.text,
            },
          ]}
        />
      </View>
      <View style={styles.itemRow}>
        <View style={styles.itemRowHeader}>
          <Text style={[styles.itemRowTitle, {color: colors.text}]}>
            Chat Id (Liên kết Telegram)
          </Text>
          <Switch
            value={chatId.isActive}
            onValueChange={value => setChatId({...chatId, isActive: value})}
            disabled={!isEditMode}
            trackColor={{true: colors.primary, false: colors.primary}}
          />
        </View>
        {chatId.isActive && (
          <TextInput
            value={chatId.value}
            placeholder="Vui lòng điền chat id"
            onChangeText={text => setChatId({...chatId, value: text})}
            editable={isEditMode}
            placeholderTextColor={errors.chatId ? 'red' : colors.text}
            style={[
              styles.itemRowInput,
              {
                borderColor: errors.chatId ? 'red' : colors.text,
                color: colors.text,
              },
            ]}
          />
        )}
      </View>
      <View style={styles.action}>
        {isEditMode && (
          <Pressable style={styles.button} onPress={onCancel}>
            <Text style={{color: colors.text}}>Hủy</Text>
          </Pressable>
        )}
        <Pressable
          style={[
            styles.button,
            {backgroundColor: isDisableSubmit ? 'gray' : colors.primary},
          ]}
          onPress={onEdit}
          disabled={isDisableSubmit}>
          <Text style={{color: 'white'}}>{isEditMode ? 'Lưu' : 'Sửa'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default memo(Form);
