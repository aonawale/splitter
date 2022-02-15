import {ReactNode} from 'react'
import {TextStyle, ViewProps} from 'react-native'

export type TypographyColor =
  | 'alert'
  | 'default'
  | 'inherit'
  | 'link'
  | 'secondary'
  | 'white'

export type TypographyVariant =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'calloutBold'
  | 'subhead'
  | 'callout2'
  | 'callout3'
  | 'footnote'
  | 'caption1'
  | 'caption1Caps'
  | 'caption2'

export interface TypographyProps extends ViewProps {
  children: ReactNode
  color?: TypographyColor
  variant?: TypographyVariant
  style?: TextStyle | TextStyle[]
  numberOfLines?: number
}
