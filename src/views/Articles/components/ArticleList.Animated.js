// @flow
import React, { Component } from 'react'
import {
  Animated,
  Dimensions,
} from 'react-native'

import { ArticleList } from './';

import type { ArticleListPropsT, ArticleListStateT } from '../types';

import { layout } from '../../../styles'

class ArticleListAnimated extends Component<ArticleListPropsT, ArticleListStateT> {

  constructor(props: ArticleListPropsT) {
    super(props)

    const { width } = Dimensions.get('screen')

    this.state = {
      translateX: new Animated.Value(width),
    }
  }

  componentDidMount() {
    const { translateX } = this.state

    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
    }).start();
  }

  render() {
    const { translateX } = this.state

    return (
      <Animated.View style={[layout.fulfill, { transform: [{ translateX }] }]}>
        <ArticleList {...this.props} />
      </Animated.View>
    )
  }
}

export default ArticleListAnimated