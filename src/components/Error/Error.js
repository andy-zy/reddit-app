// @flow
import React, { Component } from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'

import type { PropsBaseT } from '../../domain/types'

import { layout } from '../../styles'
import styles from './styles'

export default class Error extends Component<PropsBaseT> {

  static navigationOptions = {
    title: 'Error',
  }

  render() {
    const { navigation } = this.props
    const error: string = navigation.state.params.error || 'Something went wrong!'

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