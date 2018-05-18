// @flow
import React from 'react'
import {
  WebView,
} from 'react-native'

import type { RenderT } from './types'

const Browser = ({ activeArticle }: RenderT) => <WebView source={{ uri: activeArticle.url }} />

export default Browser