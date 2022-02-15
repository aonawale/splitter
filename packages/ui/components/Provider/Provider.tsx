import {ReactNode} from 'react'
import {Provider, DefaultTheme as PaperDefaultTheme} from 'react-native-paper'
import {theme} from '../../helpers/theme'

const {color, palette} = theme

const defaultTheme = {
  ...PaperDefaultTheme,
  colors: {
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

type Theme = typeof PaperDefaultTheme

const buildTheme = (theme?: Theme) => ({
  ...defaultTheme,
  ...theme,
  color: {
    ...defaultTheme.colors,
    ...theme?.colors,
  },
})

export interface ProviderProps {
  theme?: Theme
  children: ReactNode
}

export default ({children, theme}: ProviderProps) => {
  return <Provider theme={buildTheme(theme)}>{children}</Provider>
}
