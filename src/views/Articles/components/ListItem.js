// @flow
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native'
import FitImage from 'react-native-fit-image'

import type { ImageT, ImageSourceT } from '../../../domain/types'
import type { ListItemPropsT } from '../types'

import { Favorite } from '../../../components'

import styles from '../styles';

const getBestResolutionSource = (data) => {
  const imageData: ?ImageT = data && data.images && data.images[0]

  if (!imageData) {
    return null
  }

  const widthRange = { min: 480, max: 640 }

  // Disabled because for some reason all preview urls are broken (return 403)
  // return imageData.resolutions &&
  //   imageData.resolutions.find(({ width }) => (width >= widthRange.min && width <= widthRange.max)) || imageData.source

  return imageData.source
}

const ListItem = ({ item, orientation, onPress }: ListItemPropsT) => {
  const isPortrait: boolean = orientation === 'PORTRAIT'
  const imageSource: ?ImageSourceT = getBestResolutionSource(item.preview)

  return (
    <TouchableHighlight onPress={onPress(item)} style={styles.button}>
      <View style={[styles.item, styles.button, !isPortrait && styles.itemL]}>
        <View style={[styles.imageWrap, isPortrait ? styles.imageWrapP : styles.imageWrapL]} >
          {
            imageSource ? (
              <FitImage
                indicator={true}
                indicatorColor="#0ac3ee"
                indicatorSize="large"
                resizeMode="contain"
                source={{ uri: imageSource.url }}
                originalWidth={imageSource.width}
                originalHeight={imageSource.height}
                style={styles.image}
              />
            ) : (
              <Image source={require('../../../images/No_Image_Available.png')} style={styles.noImage} />
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