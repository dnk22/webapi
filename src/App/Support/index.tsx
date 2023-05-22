import {useState} from 'react';
import {Text, View, StyleSheet, Image, Linking, Pressable} from 'react-native';
import Modal from 'react-native-modal';

const telegramURL = 'https://t.me/selltool';
const webURL = 'https://ukm.vn/';

export default function Support() {
  const [isShowModal, setIsShowModal] = useState(false);
  const openTelegram = () => {
    Linking.openURL(telegramURL).catch(() => {
      console.log('Fail to open app');
    });
  };

  const onToggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <Pressable style={styles.support} onPress={onToggleModal}>
        <Image
          source={require('./support.png')}
          style={{width: 20, height: 20}}
        />
      </Pressable>
      <Modal
        isVisible={isShowModal}
        onBackdropPress={onToggleModal}
        style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Cần hỗ trợ?</Text>
          <View style={styles.divider} />
          <View style={styles.content}>
            <Text style={styles.subTitle}>Contact: </Text>
            <Pressable style={styles.image} onPress={openTelegram}>
              <Image
                source={require('./tele.jpg')}
                style={{width: 120, height: 150, borderRadius: 10}}
              />
              <Text style={styles.link}>t.me/selltool</Text>
            </Pressable>
          </View>
          <View style={styles.content}>
            <Text style={styles.subTitle}>
              Product of{' '}
              <Text style={styles.link} onPress={() => Linking.openURL(webURL)}>
                ukm.vn
              </Text>{' '}
            </Text>
          </View>
        </View>
      </Modal>
    </>
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