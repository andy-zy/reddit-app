// @flow
import React, { Component } from 'react'
import { View } from 'react-native'

import type { PropsT, StateT } from './types'

import getDeviceOrientation from '../../utils/deviceOrientation'

import { layout } from '../../styles'

export default (RootComponent: any) => class OrientationHOC extends Component<PropsT, StateT> {

  static navigationOptions = RootComponent.navigationOptions

  constructor(props: PropsT) {
    super(props)

    this.state = {
      orientation: getDeviceOrientation()
    }
  }

  handleLayoutChange = () => {
    this.setState({
      orientation: getDeviceOrientation()
    })
  }

  render() {
    const { orientation } = this.state

    return (
      <View style={layout.fulfill} onLayout={this.handleLayoutChange}>
        <RootComponent {...this.props} orientation={orientation} />
      </View>
    )
  }
}