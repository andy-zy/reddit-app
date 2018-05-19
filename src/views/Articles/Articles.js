// @flow
import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import type { ArticleT } from '../../domain/types'
import type { PropsT, StateT, RenderT } from './types'

import { Tabs, Search, ArticleList, ListItem } from './components'
import { layout } from '../../styles';

export default class Articles extends Component<PropsT, StateT> {

  static navigationOptions = {
    title: 'Articles',
  }

  static MIN_CHARTERS_TO_SEARCH = 3

  // HACK: for some reason reddit api returns one extra item (26 instead of 25)
  // in case if "after" parameter is undefined or null
  static INITIAL_BATCH_SIZE = 24

  constructor(props: PropsT) {
    super(props)

    this.state = {
      articles: [],
      favorites: [],
      query: null,
      activeIndex: 0,
    }
  }

  componentDidMount() {
    this.fetchArticles(Articles.INITIAL_BATCH_SIZE)
  }

  componentWillReceiveProps(nextProps: PropsT) {
    const {
      after,
      isFetching,
      navigation,
    } = this.props

    const {
      articles,
      favorites,
    } = nextProps

    this.setState({
      articles,
      favorites,
    })

    if (isFetching && !nextProps.isFetching && nextProps.error) {
      navigation.navigate('Error', { error: nextProps.error })
    }

    // Fetch initial data after refreshing
    if (nextProps.after === null && nextProps.after !== after && !nextProps.articles.length) {
      this.fetchArticles(Articles.INITIAL_BATCH_SIZE, null)
    }
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

  handleSearch = (value: string) => {
    const { articles, favorites } = this.props

    this.setState({
      query: value,
    })

    if (value && value.length >= Articles.MIN_CHARTERS_TO_SEARCH) {
      const regexByValue = new RegExp(value, 'i')

      this.setState({
        articles: articles.filter(article => regexByValue.test(article.title)),
        favorites: favorites.filter(favorite => regexByValue.test(favorite.title)),
      })
    } else {
      this.setState({
        articles,
        favorites,
      })
    }
  }

  fetchArticles = (limit: ?number, customAfter: ?string) => {
    const { getArticlesByCategory, after } = this.props
    const { query } = this.state
    const finalAfter = customAfter !== undefined ? customAfter : after

    if (!query) {
      getArticlesByCategory('reactjs', finalAfter, limit)
    }
  }

  render() {
    const {
      error,
      isFetching,
      refreshArticles,
      orientation,
    } = this.props

    const {
      query,
      activeIndex,
      articles,
      favorites,
    } = this.state

    return (
      <KeyboardAvoidingView
        style={layout.container}
        behavior="padding"
        enabled={orientation === 'PORTRAIT'}
      >
        <Search
          onSearch={this.handleSearch}
          query={query}
        />

        <Tabs
          activeIndex={activeIndex}
          onPress={this.handleTabPress}
        />

        <ArticleList
          display-if={activeIndex === 0}
          articles={articles}
          isFetching={isFetching}
          itemRenderer={this.renderItem}
          fetchData={this.fetchArticles}
          onRefresh={refreshArticles}
          error={error}
        />

        <ArticleList
          display-if={activeIndex === 1}
          articles={favorites}
          itemRenderer={this.renderItem}
        />
      </KeyboardAvoidingView>
    )
  }
}
