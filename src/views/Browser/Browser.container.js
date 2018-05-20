import { connect } from 'react-redux'

import Browser from './Browser'
import { activeArticleSelector } from '../../domain/selectors'

const mapStateToProps = (state) => ({
  activeArticle: activeArticleSelector(state),
})

export default connect(
  mapStateToProps,
)(Browser)