export const afterSelector = state => state.after
export const articlesSelector = state => state.articles
export const favoritesSelector = state => Object.values(state.favorites)
export const favoritesByIdSelector = state => Object.keys(state.favorites)
export const isFetchingArticlesSelector = state => state.isFetchingArticles
export const fetchingArticlesErrorSelector = state => state.fetchingArticlesError
export const activeArticleSelector = state => state.activeArticle