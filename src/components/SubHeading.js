// @flow
import React from 'react'
import { Text } from 'react-native'

import { layout } from '../styles'

export default (props: Object) => <Text {...props} style={[layout.subHeading, props.style]}>{props.children}</Text>