// @flow
import { createReducer } from '../utils/createReducer'

import type { StoreT } from './types'

import ActionEnum from './constants'

export const INITIAL_STATE: StoreT = {
  articles: [],
  favorites: {},
  activeArticle: null,
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

  [ActionEnum.SET_ACTIVE_ARTICLE]: (state, { activeArticle }) => ({ activeArticle }),

  [ActionEnum.ADD_FAVORITE]: (state, { article }) => ({
    favorites: {
      ...state.favorites,
      [article.id]: article,
    }
  }),

  [ActionEnum.REMOVE_FAVORITE]: (state, { id }) => {
    const newFavorites = { ...state.favorites }

    delete newFavorites[id]

    return {
      favorites: newFavorites,
    }
  },
}

export default createReducer(actionTypeToHandler, INITIAL_STATE)