// @flow
export type OrientationT = string
export type NavigationT = Object

export type PropsBaseT = {
  orientation: OrientationT,
  navigation: NavigationT,
}

export type ImageSourceT = {
  url: string,
  width: number,
  height: number,
}

export type ImageT = {
  source: ImageSourceT,
}

export type PreviewT = {
  images: Array<ImageT>,
}

export type ArticleT = {
  id: string,
  title: string,
  url: string,
  preview?: PreviewT,
}

export type ArticlesT = Array<ArticleT>

export type ActionT = {
  type: string,
  payload: ?any,
}

export type StoreT = {
  articles: [],
  activeArticle: null,
  favorites: [],
  isFetchingArticles: false,
  fetchingArticlesError: '',
}