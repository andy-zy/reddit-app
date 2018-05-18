// @flow
// Idea is gotten from https://corbt.com/posts/2016/03/16/detecting-orientation-in-react-native.html
import { Dimensions } from 'react-native'

export default (): string  => {
  const { width, height } = Dimensions.get('screen')

  return width > height ? 'LANDSCAPE' : 'PORTRAIT'
}