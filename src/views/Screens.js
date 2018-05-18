import React from 'react'
import { StackNavigator } from 'react-navigation'

import {
  Error,
  Browser,
  Articles,
} from './'

const Screens = StackNavigator(
  {
    Error: {
      screen: Error,
    },
    Browser: {
      screen: Browser,
    },
    Articles: {
      screen: Articles,
    },
  },
  {
    initialRouteName: 'Articles',
  },
)

export default Screens