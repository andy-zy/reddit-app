// @flow
import React from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import type { ArticleListPropsT } from '../types';
import type { ArticleT } from '../../../domain/types';

import styles from '../styles';

const keyExtractor = (item: ArticleT) => item.id

const separatorRenderer = () => <View style={styles.separator} />

const ArticleList = ({
  error,
  isFetching,
  articles,
  itemRenderer,
  fetchData,
  onRefresh,
}: ArticleListPropsT) => (
  <View style={styles.list}>
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
  </View>
)

export default ArticleList