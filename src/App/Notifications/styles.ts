import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionStatus: {
    marginBottom: 20,
    fontSize: 18,
  },
  notificationsWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '30%',
  },
  notificationWrapper: {
    flexDirection: 'column',
    width: width * 0.8,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 2,
  },
  notification: {
    flexDirection: 'row',
  },
  imagesWrapper: {
    flexDirection: 'column',
  },
  notificationInfoWrapper: {
    flex: 1,
  },
  notificationIconWrapper: {
    backgroundColor: '#aaa',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 15,
    justifyContent: 'center',
  },
  notificationIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  notificationImageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 15,
    justifyContent: 'center',
  },
  notificationImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  scrollView: {
    flex: 1,
  },
  textInfo: {
    color: '#000',
  },
  appConfig: {
    flex: 1,
    width: '80%',
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  appView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  appViewTitle: {
    marginVertical: 10,
  },
});
