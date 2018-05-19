// @flow
import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import type { TabsPropsT } from '../types'

import styles from '../styles'

const tabList = ['ReactJS', 'Favorites']

const Tabs = ({ activeIndex = 0, onPress }: TabsPropsT) => (
  <View style={styles.tabs}>
    {
      tabList.map((tab, index) => (
        <TouchableHighlight
          key={index}
          onPress={onPress(index)}
          style={[styles.tab, index === 0 && styles.firstTab, activeIndex === index && styles.activeTab]}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableHighlight>
      ))
    }
  </View>
)

export default Tabs