import { compose } from 'redux'
import { connect } from 'react-redux'

import Articles from './Articles'
import {
  articlesSelector,
  isFetchingArticlesSelector,
  fetchingArticlesErrorSelector,
} from '../../domain/selectors'
import { getArticlesByCategory, setActiveArticle } from '../../domain/actions'
import { OrientationHOC } from '../../components'

const mapStateToProps = (state) => ({
  articles: articlesSelector(state),
  isFetching: isFetchingArticlesSelector(state),
  error: fetchingArticlesErrorSelector(state),
})

const mapActionsToProps = {
  getArticlesByCategory,
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