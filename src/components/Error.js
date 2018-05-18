// @flow
import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import type { PropsBaseT } from '../domain/types'

import { layout, colors } from '../styles'

export default class Error extends Component<PropsBaseT> {

  static navigationOptions = {
    title: 'Error',
  }

  render() {
    const { navigation } = this.props
    const error: string = navigation.state.params.error || 'Something went wrong!'

    return (
      <View style={layout.vContainer}>
        <Text style={colors.error}>{error}</Text>
      </View>
    )
  }
}