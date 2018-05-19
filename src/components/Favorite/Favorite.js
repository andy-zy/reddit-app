// @flow
import React from 'react'
import {
  Image,
  TouchableHighlight,
} from 'react-native'

import type { PropsT } from './types'

import styles from './styles'

const Favorite = ({ isFavorite, toggleFavorite }: PropsT) => (
  <TouchableHighlight onPress={toggleFavorite} style={styles.container}>
    {
      isFavorite ? (
        <Image source={require('../../images/marked_favorite.png')} style={styles.star} />
      ) : (
        <Image source={require('../../images/unmarked_favorite.png')} style={styles.star} />
      )
    }
  </TouchableHighlight>
)

export default Favorite