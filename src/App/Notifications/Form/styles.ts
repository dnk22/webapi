import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  action: {
    marginRight: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    columnGap: 10,
  },
  button: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#007bff',
  },
  primary: {
    backgroundColor: '#007bff',
    color: 'white',
  },
});
