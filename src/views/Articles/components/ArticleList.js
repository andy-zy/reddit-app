// @flow
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native'

import type { ArticleListPropsT, ArticleListStateT } from '../types';
import type { ArticleT } from '../../../domain/types';

import styles from '../styles';

const keyExtractor = (item: ArticleT) => item.id

const separatorRenderer = () => <View style={styles.separator} />

class ArticleList extends Component<ArticleListPropsT, ArticleListStateT> {

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
    const {
      error,
      isFetching,
      articles,
      itemRenderer,
      fetchData,
      onRefresh,
    } = this.props

    const { translateX } = this.state

    return (
      <Animated.View style={[styles.list, { transform: [{ translateX }] }]}>
        <FlatList
          display-if={articles.length}
          data={articles}
          renderItem={itemRenderer}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={separatorRenderer}
          onEndReachedThreshold={0.5}
          onEndReached={fetchData}
          refreshing={isFetching}
          onRefresh={onRefresh}
        />

        <View display-if={!isFetching && !articles.length}>
          <Text style={styles.tabText}>No data to show!</Text>

          <Button
            display-if={error}
            onPress={fetchData}
            title="Try Again"
          />
        </View>

        <View style={styles.loaderContainer} >
          <ActivityIndicator display-if={isFetching} />
        </View>
      </Animated.View>
    )
  }
}



export default ArticleList