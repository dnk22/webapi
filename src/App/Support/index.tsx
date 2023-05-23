import {Text, View, StyleSheet, Image, Linking, Pressable} from 'react-native';
import {useCustomTheme} from '../../theme';

const telegramURL = 'https://t.me/selltool';
const webURL = 'https://ukm.vn/';

export default function Support() {
  const {colors} = useCustomTheme();

  const openTelegram = () => {
    Linking.openURL(telegramURL).catch(() => {
      console.log('Fail to open app');
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: colors.surface}]}>
        <Text style={[styles.title, {color: colors.text}]}>Cần hỗ trợ?</Text>
        <View style={styles.divider} />
        <View style={styles.content}>
          <Text style={[styles.subTitle, {color: colors.text}]}>Contact: </Text>
          <Pressable style={styles.image} onPress={openTelegram}>
            <Image
              source={require('../assets/tele.jpg')}
              style={{width: 120, height: 150, borderRadius: 10}}
            />
            <Text style={[styles.link, {color: colors.text}]}>
              t.me/selltool
            </Text>
          </Pressable>
        </View>
        <View style={styles.content}>
          <Text style={[styles.subTitle, {color: colors.text}]}>
            Product of{' '}
            <Text style={styles.link} onPress={() => Linking.openURL(webURL)}>
              ukm.vn
            </Text>{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  divider: {
    width: '90%',
    height: 0.5,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 20,
  },
  link: {
    color: '#007bff',
  },
  image: {
    alignItems: 'center',
    marginTop: 10,
  },
  support: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
