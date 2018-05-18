import ActionEnum from './constants'
import api from '../services/api'
import endpoints from '../utils/endpoints'

export const getArticlesByCategory = (category, from, count) => (dispatch) => {
  dispatch({
    type: ActionEnum.GET_ARTICLES,
  })

  api.get(endpoints.getArticlesCategoryUrl(category))
    .then((response) => response.json())
    .then(({ data }) => {
      if (data && data.children) {
        dispatch({
          type: ActionEnum.GET_ARTICLES_SUCCESS,
          payload: { articles: data.children },
        })
      } else {
        dispatch({
          type: ActionEnum.GET_ARTICLES_FAILURE,
          payload: { error: 'No data found!' },
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

export const setActiveArticle = (activeArticle) => ({
  type: ActionEnum.SET_ACTIVE_ARTICLE,
  payload: { activeArticle },
})

export const toggleFavorite = (article) => ({
  type: ActionEnum.TOGGLE_FAVORITE,
  payload: { article },
})