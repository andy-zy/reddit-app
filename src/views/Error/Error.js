// @flow
import React, { Component } from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'

import type { ErrorPropsT } from './types'

import { layout } from '../../styles'
import styles from './styles'

export default class Error extends Component<ErrorPropsT> {

  static navigationOptions = {
    title: 'Error',
  }

  render() {
    const { error = 'Something went wrong!' } = this.props

    return (
      <View style={[layout.container, styles.container]}>
        <Image
          style={styles.image}
          source={require('../../images/oops.png')}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    )
  }
}