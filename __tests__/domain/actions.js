import ActionEnum from '../../src/domain/constants'
import {
  getArticlesByCategory,
  refreshArticles,
  setActiveArticle,
  addFavorite,
  removeFavorite,
} from '../../src/domain/actions'
import api from '../../src/services/api'
import endpoints from '../../src/utils/endpoints';

describe('actions', () => {
  const dispatch = jest.fn()

  describe('getArticlesByCategory', () => {
    let promise;
    const args = ['category', 'after', 5]
    const response = {
      data: { children: [] },
      json: () => response,
    }

    it('returns a function', () => {
      expect(getArticlesByCategory(...args)).toBeInstanceOf(Function)
    })

    describe('on success', () => {
      beforeAll(() => {
        api.get = jest.fn(() => new Promise((resolve) => resolve(response)))
      })

      beforeEach(() => {
        promise = getArticlesByCategory(...args)(dispatch)
      })

      it('should dispatch GET_ARTICLES', async () => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionEnum.GET_ARTICLES,
        })
      })

      it('should call api.get', () => {
        expect(api.get).toHaveBeenCalledWith(endpoints.getArticlesCategoryUrl(...args))
      })

      it('should dispatch GET_ARTICLES_SUCCESS', async () => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionEnum.GET_ARTICLES_SUCCESS,
          payload: { articles: response.data.children },
        })
      })
    })

    describe('on error', () => {
      const invalidResponse = {
        ...response,
        data: { message: 'error' },
      }

      beforeAll(() => {
        api.get = jest.fn(() => new Promise((resolve, reject) => reject(invalidResponse)))
      })

      beforeEach(() => {
        promise = getArticlesByCategory(...args)(dispatch)
      })

      it('should dispatch GET_ARTICLES', async () => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionEnum.GET_ARTICLES,
        })
      })

      it('should call api.get', () => {
        expect(api.get).toHaveBeenCalledWith(endpoints.getArticlesCategoryUrl(...args))
      })

      it('should dispatch GET_ARTICLES_FAILURE', async () => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionEnum.GET_ARTICLES_FAILURE,
          payload: { articles: response.error },
        })
      })
    })
  })

  it('refreshArticles output', () => {
    expect(refreshArticles()).toEqual({
      type: ActionEnum.REFRESH_ARTICLES,
    })
  })

  it('setActiveArticle output', () => {
    const activeArticle = 'activeArticle'
    expect(setActiveArticle(activeArticle)).toEqual({
      type: ActionEnum.SET_ACTIVE_ARTICLE,
      payload: { activeArticle },
    })
  })

  it('addFavorite output', () => {
    const article = 'article'
    expect(addFavorite(article)).toEqual({
      type: ActionEnum.ADD_FAVORITE,
      payload: { article },
    })
  })

  it('removeFavorite output', () => {
    const id = 'id'
    expect(removeFavorite(id)).toEqual({
      type: ActionEnum.REMOVE_FAVORITE,
      payload: { id },
    })
  })
})