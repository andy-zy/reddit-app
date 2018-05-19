// @flow
import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import type { ArticleListPropsT } from '../types';
import type { ArticleT } from '../../../domain/types';

import styles from '../styles';

const keyExtractor = (item: ArticleT) => item.id

const separatorRenderer = () => <View style={styles.separator} />

const ArticleList = ({ isFetching, articles, itemRenderer }: ArticleListPropsT) => (
  <View style={styles.list}>
    {
      isFetching ? <ActivityIndicator /> : (
        <FlatList
          data={articles}
          renderItem={itemRenderer}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={separatorRenderer}
        />
      )
    }
  </View>
)

export default ArticleList