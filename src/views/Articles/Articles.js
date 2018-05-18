// @flow
import React, { Component } from 'react'
import {
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native'

import type { ArticleT } from '../../domain/types'
import type { PropsT, RenderT } from './types'

import { SubHeading } from '../../components'
import { layout } from '../../styles';
import styles from './styles'

export default class Articles extends Component<PropsT> {

  static navigationOptions = {
    title: 'ReactJS',
  }

  componentDidMount() {
    const { getArticlesByCategory } = this.props

    getArticlesByCategory(Articles.navigationOptions.title.toLocaleLowerCase())
  }

  renderItem = ({ item }: RenderT) => {
    const { orientation } = this.props
    const isPortrait: boolean = orientation === 'PORTRAIT'
    const imageSource = item.preview &&
      item.preview.images &&
      item.preview.images[0] &&
      item.preview.images[0].source;

    return (
      <TouchableHighlight onPress={this.handlePress(item)} style={styles.button}>
        <View style={[styles.item, styles.button, !isPortrait && styles.itemL]}>
          <View style={[styles.imageWrap, isPortrait ? styles.imageWrapP : styles.imageWrapL]} >
            {
              imageSource ? (
                <Image
                  source={{ uri: imageSource.url, height: imageSource.height, width: imageSource.width }}
                  style={styles.image}
                />
              ) : (
                <Image source={require('../../images/No_Image_Available.png')} style={styles.image} />
              )
            }
          </View>
          <SubHeading style={!isPortrait && styles.textL}>{item.title}</SubHeading>
        </View>
      </TouchableHighlight>
    )
  }

  renderSeparator = () => <View style={styles.separator} />

  keyExtractor = (item: ArticleT) => item.id

  handlePress = (item: ArticleT) => {
    const { setActiveArticle, navigation } = this.props

    return () => {
      setActiveArticle(item)
      navigation.navigate('Browser')
    }
  }

  render() {
    const {
      articles,
      isFetching,
      orientation,
    } = this.props

    const isPortrait: boolean = orientation === 'PORTRAIT'

    return (
      <View style={isPortrait ? layout.vContainer : layout.hContainer}>
        {
          isFetching ? <ActivityIndicator /> : (
            <FlatList
              data={articles}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.renderSeparator}
            />
          )
        }
      </View>
    )
  }
}
