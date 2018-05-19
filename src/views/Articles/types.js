// @flow
import type { PropsBaseT, ArticleT, ArticlesT } from '../../domain/types'

export type RenderT = {
  item: ArticleT,
}

export type OwnPropsT = {
  articles: ArticlesT,
  favorites: ArticlesT,
  isFetching: boolean,
  error: string,
  setActiveArticle: Function,
  getArticlesByCategory: Function,
}

export type StateT = {
  activeIndex: number,
}

export type TabsPropsT = {
  activeIndex: number,
  onPress: Function,
}

export type ArticleListPropsT = {
  isFetching: boolean,
  articles: ArticlesT,
  itemRenderer: Function,
}

export type ListItemPropsT = {
  item: ArticleT,
  onPress: Function,
  orientation: string,
}

export type PropsT = PropsBaseT & OwnPropsT