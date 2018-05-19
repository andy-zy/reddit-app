// @flow
import React from 'react'
import {
  View,
  TextInput,
} from 'react-native'

import type { SearchPropsT } from '../types'

import styles from '../styles'

const Tabs = ({ query, onSearch }: SearchPropsT) => (
  <View style={styles.search}>
    <TextInput
      clearButtonMode="always"
      placeholder="Search"
      onChangeText={onSearch}
      value={query}
    />
  </View>
)

export default Tabs