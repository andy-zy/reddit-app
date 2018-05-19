import ActionEnum from './constants'
import api from '../services/api'
import endpoints from '../utils/endpoints'

export const getArticlesByCategory = (category, after, limit) => (dispatch) => {
  dispatch({
    type: ActionEnum.GET_ARTICLES,
  })

  api.get(endpoints.getArticlesCategoryUrl(category, after, limit))
    .then((response) => response.json())
    .then(({ data, message }) => {
      if (data && data.children) {
        dispatch({
          type: ActionEnum.GET_ARTICLES_SUCCESS,
          payload: { articles: data.children },
        })
      } else {
        dispatch({
          type: ActionEnum.GET_ARTICLES_FAILURE,
          payload: { error: message || 'No data found!' },
        })
      }
    })
    .catch(({ error }) => {
      dispatch({
        type: ActionEnum.GET_ARTICLES_FAILURE,
        payload: { error },
      })
    })
}

export const refreshArticles = () => ({
  type: ActionEnum.REFRESH_ARTICLES,
})

export const setActiveArticle = (activeArticle) => ({
  type: ActionEnum.SET_ACTIVE_ARTICLE,
  payload: { activeArticle },
})

export const addFavorite = (article) => ({
  type: ActionEnum.ADD_FAVORITE,
  payload: { article },
})

export const removeFavorite = (id) => ({
  type: ActionEnum.REMOVE_FAVORITE,
  payload: { id },
})