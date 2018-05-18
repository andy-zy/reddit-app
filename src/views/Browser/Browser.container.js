import { connect } from 'react-redux'

import Browser from './Browser'
import { activeArticleSelector } from '../../domain/selectors'
import { toggleFavorite } from '../../domain/actions'

const mapStateToProps = (state) => ({
  activeArticle: activeArticleSelector(state),
})

const mapActionsToProps = {
  toggleFavorite,
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Browser)