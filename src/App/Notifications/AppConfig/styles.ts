import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  appConfig: {
    flex: 1,
    marginBottom: 10,
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
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  modal: {
    width: '80%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
});
