import {ColorValue, ViewProps} from 'react-native'
import {KeyboardOffsets, ScreenPresets} from './Screen.style'
import {Edge} from 'react-native-safe-area-context'

export interface ScreenProps extends ViewProps {
  preset?: ScreenPresets
  backgroundColor?: string
  statusBar?: 'light-content' | 'dark-content'
  statusBarBackgroundColor?: ColorValue
  keyboardOffset?: KeyboardOffsets
  safeArea?: boolean
  safeAreaEdges?: Edge[]
  keyboardShouldPersistTaps?: 'never' | 'handled' | 'always'
}
