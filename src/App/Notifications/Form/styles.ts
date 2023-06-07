import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  action: {
    borderTopColor: '#EEEEEE',
    borderTopWidth: 0.5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 10,
    marginTop: 10,
    paddingTop: 10,
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
    color: 'white',
  },
  itemRow: {
    marginBottom: 5,
  },
  itemRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  itemRowTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  itemRowInput: {
    height: 40,
    marginHorizontal: 10,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
});
