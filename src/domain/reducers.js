// @flow
import { createReducer } from '../utils/createReducer'

import type { StoreT } from './types'

import ActionEnum from './constants'

export const INITIAL_STATE: StoreT = {
  articles: [],
  activeArticle: null,
  favorites: [],
  isFetchingArticles: false,
  fetchingArticlesError: '',
}

const actionTypeToHandler = {
  [ActionEnum.GET_ARTICLES]: () => ({ isFetchingArticles: true, fetchingArticlesError: '' }),
  [ActionEnum.GET_ARTICLES_FAILURE]: (state, { error }) => ({ isFetchingArticles: false, fetchingArticlesError: error }),
  [ActionEnum.GET_ARTICLES_SUCCESS]: (state, { articles }) => ({
    articles: articles.map(({ data: { id, title, url, preview } }) => ({ id, title, url, preview })),
    isFetchingArticles: false,
    fetchingArticlesError: '',
  }),

  [ActionEnum.SET_ACTIVE_ARTICLE]: (state, { activeArticle }) => ({ activeArticle })
}

export default createReducer(actionTypeToHandler, INITIAL_STATE)