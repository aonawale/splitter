import {ViewProps, ViewStyle} from 'react-native'
import {spacing} from '../../helpers/theme/metrics'

export type Size =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.5
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10

export type SpacingUnit = keyof typeof spacing | Size

export type Sides = {
  top?: SpacingUnit
  right?: SpacingUnit
  bottom?: SpacingUnit
  left?: SpacingUnit
  vertical?: SpacingUnit
  horizontal?: SpacingUnit
}

export const VIEW_STYLES_PROPS_ARRAY = <const>[
  'flex',
  'justifyContent',
  'alignContent',
  'alignItems',
  'flexDirection',
]

export type ViewStylesProps = typeof VIEW_STYLES_PROPS_ARRAY[number]

export interface LayoutProps
  extends ViewProps,
    Pick<ViewStyle, ViewStylesProps> {
  padding?: SpacingUnit | Sides
  margin?: SpacingUnit | Sides
}
