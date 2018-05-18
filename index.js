// @flow
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/utils/configureStore'
import App from './src/views/App'

const RedditApp = (): React$Element<*> => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('redditApp', () => RedditApp)
