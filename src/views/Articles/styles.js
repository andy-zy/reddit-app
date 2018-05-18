import {
  StyleSheet,
} from 'react-native'

export default StyleSheet.create({
  button: {
    borderColor: '#FFF',
    borderRadius: 5,
  },
  item: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  itemL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapP: {
    height: 160,
    marginBottom: 10,
  },
  imageWrapL: {
    flex: 1,
    height: 120,
    marginRight: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  textL: {
    flex: 1,
  },
  separator: {
    height: 10,
  }
})