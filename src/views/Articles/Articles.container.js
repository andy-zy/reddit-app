import { compose } from 'redux'
import { connect } from 'react-redux'

import Articles from './Articles'
import {
  afterSelector,
  articlesSelector,
  favoritesSelector,
  isFetchingArticlesSelector,
  fetchingArticlesErrorSelector,
} from '../../domain/selectors'
import {
  getArticlesByCategory,
  refreshArticles,
  setActiveArticle,
} from '../../domain/actions'
import { OrientationHOC } from '../../components'

const mapStateToProps = (state) => ({
  after: afterSelector(state),
  articles: articlesSelector(state),
  favorites: favoritesSelector(state),
  isFetching: isFetchingArticlesSelector(state),
  error: fetchingArticlesErrorSelector(state),
})

const mapActionsToProps = {
  getArticlesByCategory,
  refreshArticles,
  setActiveArticle,
}

const Connected = connect(
  mapStateToProps,
  mapActionsToProps,
)

export default compose(
  Connected,
  OrientationHOC,
)(Articles)