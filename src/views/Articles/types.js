// @flow
import type { PropsBaseT, ArticleT, ArticlesT } from '../../domain/types'

export type RenderT = {
  item: ArticleT,
}

export type OwnPropsT = {
  articles: ArticlesT,
  isFetching: boolean,
  error: string,
  setActiveArticle: Function,
  getArticlesByCategory: Function,
}

export type PropsT = PropsBaseT & OwnPropsT