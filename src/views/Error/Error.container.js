import { connect } from 'react-redux'

import Error from './Error'
import { fetchingArticlesErrorSelector } from '../../domain/selectors'

const mapStateToProps = (state) => ({
  error: fetchingArticlesErrorSelector(state),
})

export default connect(
  mapStateToProps,
)(Error)