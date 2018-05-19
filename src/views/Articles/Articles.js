// @flow
import React, { Component } from 'react'
import { View } from 'react-native'

import type { ArticleT } from '../../domain/types'
import type { PropsT, StateT, RenderT } from './types'

import { Tabs, ArticleList, ListItem } from './components'
import { layout } from '../../styles';

export default class Articles extends Component<PropsT, StateT> {

  static navigationOptions = {
    title: 'Articles',
  }

  constructor(props: PropsT) {
    super(props)

    this.state = {
      activeIndex: 0,
    }
  }

  componentDidMount() {
    const { getArticlesByCategory } = this.props

    getArticlesByCategory('reactjs')
  }

  componentWillReceiveProps(nextProps: PropsT) {
    // TODO: add fetching errors handling
  }

  renderItem = ({ item }: RenderT) => {
    const { orientation } = this.props

    return <ListItem item={item} onPress={this.handleArticlePress} orientation={orientation} />
  }

  handleArticlePress = (item: ArticleT) => {
    const { setActiveArticle, navigation } = this.props

    return () => {
      setActiveArticle(item)
      navigation.navigate('Browser')
    }
  }

  handleTabPress = (index: number) => () => {
    this.setState({
      activeIndex: index,
    })
  }

  render() {
    const {
      articles,
      favorites,
      isFetching,
    } = this.props

    const { activeIndex } = this.state

    return (
      <View style={layout.container}>
        <Tabs
          activeIndex={activeIndex}
          onPress={this.handleTabPress}
        />

        <ArticleList
          display-if={activeIndex === 0}
          articles={articles}
          isFetching={isFetching}
          itemRenderer={this.renderItem}
        />

        <ArticleList
          display-if={activeIndex === 1}
          articles={favorites}
          itemRenderer={this.renderItem}
        />
      </View>
    )
  }
}
