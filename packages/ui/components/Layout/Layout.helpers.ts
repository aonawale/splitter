import {ViewStyle} from 'react-native'
import {spacing} from '../../helpers/theme/metrics'
import {SpacingUnit, Sides} from './Layout.model'

const metrics = {
  unit: 8,
}

export const calcSpacing = (value?: SpacingUnit) => {
  if (!value) return undefined
  if (typeof value === 'string') return spacing[value]
  return value * metrics.unit
}

export const getSpacingStyle = (
  type: 'margin' | 'padding',
  value: SpacingUnit | Sides | undefined,
): ViewStyle | undefined => {
  if (!value) return undefined
  if (typeof value === 'string' || typeof value === 'number') {
    return {
      [type]: calcSpacing(value),
    }
  }
  return Object.entries(value).reduce<ViewStyle>(
    (result, [key, val]) => ({
      ...result,
      [`${type}${key.charAt(0).toUpperCase()}${key.slice(1)}`]:
        calcSpacing(val),
    }),
    {},
  )
}
