// @flow
import type { PropsBaseT, ArticleT, ArticlesT } from '../../domain/types'

export type RenderT = {
  item: ArticleT,
}

export type OwnPropsT = {
  after: ?string,
  articles: ArticlesT,
  favorites: ArticlesT,
  isFetching: boolean,
  error: string,
  setActiveArticle: Function,
  refreshArticles: Function,
  getArticlesByCategory: Function,
}

export type StateT = {
  articles: ArticlesT,
  favorites: ArticlesT,
  query: ?string,
  activeIndex: number,
}

export type SearchPropsT = {
  query: string,
  onSearch: Function,
}

export type TabsPropsT = {
  activeIndex: number,
  onPress: Function,
}

export type ArticleListPropsT = {
  error: ?string,
  isFetching: boolean,
  articles: ArticlesT,
  itemRenderer: Function,
  fetchData: Function,
  onRefresh: Function,
}

export type ListItemPropsT = {
  item: ArticleT,
  onPress: Function,
  orientation: string,
}

export type PropsT = PropsBaseT & OwnPropsT