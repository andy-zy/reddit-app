import { connect } from 'react-redux'

import Favorite from './Favorite'
import { activeArticleSelector, favoritesByIdSelector } from '../../domain/selectors'
import { addFavorite, removeFavorite } from '../../domain/actions'

const mapStateToProps = (state) => ({
  activeArticle: activeArticleSelector(state),
  favoritesById: favoritesByIdSelector(state),
})

const mapActionsToProps = {
  addFavorite,
  removeFavorite,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const article = ownProps.article || stateProps.activeArticle
  const isFavorite = !!article && stateProps.favoritesById.includes(article.id)
  const toggleFavorite = () => isFavorite ?
    dispatchProps.removeFavorite(article.id) : dispatchProps.addFavorite(article)

  return {
    isFavorite,
    toggleFavorite,
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
  mergeProps,
)(Favorite)