import reducers, { INITIAL_STATE } from '../../src/domain/reducers'
import ActionEnum from '../../src/domain/constants'

describe('reducers', () => {
  it('GET_ARTICLES', () => {
    const state = reducers(undefined, {
      type: ActionEnum.GET_ARTICLES,
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      isFetchingArticles: true,
      fetchingArticlesError: '',
    })
  })

  it('GET_ARTICLES_FAILURE', () => {
    const error = 'error'
    const state = reducers(undefined, {
      type: ActionEnum.GET_ARTICLES_FAILURE,
      payload: { error },
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      isFetchingArticles: false,
      fetchingArticlesError: error,
    })
  })

  it('GET_ARTICLES_SUCCESS', () => {
    const articles = [
      { data: { id: 'id1', title: 'title1', url: 'url1', preview: {} } },
      { data: { id: 'id2', title: 'title2', url: 'url2', preview: {} } },
    ]
    const state = reducers(undefined, {
      type: ActionEnum.GET_ARTICLES_SUCCESS,
      payload: { articles },
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      after: articles[articles.length - 1].data.name,
      articles: [
        ...INITIAL_STATE.articles,
        ...articles.map(({ data: { id, title, url, preview } }) => ({ id, title, url, preview }))
      ],
      isFetchingArticles: false,
      fetchingArticlesError: '',
    })
  })

  it('REFRESH_ARTICLES', () => {
    const state = reducers(undefined, {
      type: ActionEnum.REFRESH_ARTICLES,
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      articles: [],
      after: null,
    })
  })

  it('SET_ACTIVE_ARTICLE', () => {
    const activeArticle = { id: 'id1', title: 'title1', url: 'url1', preview: {} }
    const state = reducers(undefined, {
      type: ActionEnum.SET_ACTIVE_ARTICLE,
      payload: { activeArticle },
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      activeArticle,
    })
  })

  it('ADD_FAVORITE', () => {
    const article = { id: 'id1', title: 'title1', url: 'url1', preview: {} }
    const state = reducers(undefined, {
      type: ActionEnum.ADD_FAVORITE,
      payload: { article },
    })

    expect(state).toEqual({
      ...INITIAL_STATE,
      favorites: {
        ...INITIAL_STATE.favorites,
        [article.id]: article,
      }
    })
  })

  it('REMOVE_FAVORITE', () => {
    const id = 'id1'
    const state = reducers(undefined, {
      type: ActionEnum.REMOVE_FAVORITE,
      payload: { id },
    })

    const newFavorites = { ...INITIAL_STATE.favorites }

    delete newFavorites[id]

    expect(state).toEqual({
      ...INITIAL_STATE,
      favorites: newFavorites,
    })
  })
})