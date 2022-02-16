import {palette, color} from './color'
import metrics from './metrics'
import typography from './typography'
import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper'
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native'

export const theme = <const>{
  metrics,
  palette,
  color,
  typography,
}

export const appTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: color.primary,
    accent: color.secondary,
    background: color.background,
    card: color.white,
    surface: color.white,
    error: color.error,
    text: palette.primaryText,
    border: color.line,
  },
  roundness: 4,
}
