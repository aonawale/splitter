import {ReactNode} from 'react'
import {Provider, DefaultTheme as PaperDefaultTheme} from 'react-native-paper'
import {appTheme} from '../../helpers/theme'

type Theme = typeof PaperDefaultTheme

const buildTheme = (theme?: Theme) => ({
  ...appTheme,
  ...theme,
  color: {
    ...appTheme.colors,
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
