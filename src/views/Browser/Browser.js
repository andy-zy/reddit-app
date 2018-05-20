// @flow
import React, { Component } from 'react'
import { WebView } from 'react-native'

import { Favorite } from '../../components'

import type { BrowserPropsT } from './types'

class Browser extends Component<BrowserPropsT> {

  static navigationOptions = {
    headerRight: <Favorite />,
  };

  render() {
    const { activeArticle } = this.props

    return (
      <WebView source={{ uri: activeArticle.url }} />
    )
  }
}

export default Browser