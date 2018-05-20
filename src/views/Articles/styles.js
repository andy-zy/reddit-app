import {
  StyleSheet,
} from 'react-native'

export default StyleSheet.create({
  search: {
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 3,
    borderColor: '#d2d2d2',
  },
  firstTab: {
    marginLeft:0,
  },
  activeTab: {
    borderColor: '#0ac3ee',
  },
  tabText: {
    fontSize: 16,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
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
    overflow: 'hidden',
  },
  imageWrapP: {
    marginBottom: 10,
  },
  imageWrapL: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 300,
    height: 160,
  },
  noImage: {
    width: 160,
    height: 160,
  },
  textContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainerL: {
    flex: 1,
  },
  text: {
    flex: 1,
  },
  separator: {
    height: 10,
  },
  loaderContainer: {
    height: 24,
  },
})