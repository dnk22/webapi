import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  permissionStatus: {
    marginBottom: 20,
    fontSize: 18,
  },
  notificationsWrapper: {
    justifyContent: 'center',
  },
  notificationWrapper: {
    maxHeight: 300,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    rowGap: 10,
  },
  notification: {
    flexDirection: 'row',
  },
  imagesWrapper: {
    flexDirection: 'column',
  },
  notificationInfoWrapper: {
    flex: 1,
    rowGap: 5,
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
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 15,
    justifyContent: 'center',
  },
  notificationImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  scrollView: {
    maxHeight: 200,
  },
  textInfo: {
    color: '#000',
  },
  appSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowTitle: {
    fontWeight: '700',
    flex: 0.4,
  },
  rowValue: {
    flex: 1,
  },
});
