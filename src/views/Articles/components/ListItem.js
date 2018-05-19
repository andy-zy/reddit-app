// @flow
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native'

import type { ListItemPropsT } from '../types'

import { Favorite } from '../../../components'

import styles from '../styles';

const ListItem = ({ item, orientation, onPress }: ListItemPropsT) => {
  const isPortrait: boolean = orientation === 'PORTRAIT'
  const imageSource = item.preview &&
    item.preview.images &&
    item.preview.images[0] &&
    item.preview.images[0].source;

  return (
    <TouchableHighlight onPress={onPress(item)} style={styles.button}>
      <View style={[styles.item, styles.button, !isPortrait && styles.itemL]}>
        <View style={[styles.imageWrap, isPortrait ? styles.imageWrapP : styles.imageWrapL]} >
          {
            imageSource ? (
              <Image
                source={{ uri: imageSource.url, height: imageSource.height, width: imageSource.width }}
                loadingIndicatorSource={require('../../../images/loading.gif')}
                style={styles.image}
              />
            ) : (
              <Image source={require('../../../images/No_Image_Available.png')} style={styles.image} />
            )
          }
        </View>
        <View style={[styles.textContainer, !isPortrait && styles.textContainerL]}>
          <Favorite article={item} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ListItem