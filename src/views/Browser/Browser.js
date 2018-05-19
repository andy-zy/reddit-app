// @flow
import React, { Component } from 'react'
import {
  WebView,
  Text,
  TouchableHighlight,
} from 'react-native'

import { Favorite } from '../../components'

import type { RenderT } from './types'

class Browser extends Component<RenderT> {

  static navigationOptions = {
    headerRight: (<Favorite toggleFavorite={() => alert(123)} />),
  };

  render() {
    const { activeArticle } = this.props

    return (
      <WebView source={{ uri: activeArticle.url }} />
    )
  }
}

export default Browser