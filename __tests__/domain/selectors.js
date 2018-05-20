import {
  afterSelector,
  articlesSelector,
  favoritesSelector,
  favoritesByIdSelector,
  isFetchingArticlesSelector,
  fetchingArticlesErrorSelector,
  activeArticleSelector,
} from '../../src/domain/selectors'

describe('selectors', () => {
  it('afterSelector output', () => {
    const state = {
      after: 'after',
    }
    expect(afterSelector(state)).toEqual(state.after)
  })

  it('articlesSelector output', () => {
    const state = {
      articles: [1, 2, 3],
    }
    expect(articlesSelector(state)).toEqual(state.articles)
  })

  it('favoritesSelector output', () => {
    const state = {
      favorites: { a: 1, b: 2 },
    }
    expect(favoritesSelector(state)).toEqual(Object.values(state.favorites))
  })

  it('favoritesByIdSelector output', () => {
    const state = {
      favorites: { a: 1, b: 2 },
    }
    expect(favoritesByIdSelector(state)).toEqual(Object.keys(state.favorites))
  })

  it('isFetchingArticlesSelector output', () => {
    const state = {
      isFetchingArticles: true,
    }
    expect(isFetchingArticlesSelector(state)).toEqual(state.isFetchingArticles)
  })

  it('fetchingArticlesErrorSelector output', () => {
    const state = {
      fetchingArticlesError: 'error',
    }
    expect(fetchingArticlesErrorSelector(state)).toEqual(state.fetchingArticlesError)
  })

  it('activeArticleSelector output', () => {
    const state = {
      activeArticle: 'activeArticle',
    }
    expect(activeArticleSelector(state)).toEqual(state.activeArticle)
  })
})