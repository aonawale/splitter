import {ImageSourcePropType} from 'react-native'

export const CUSTOM_ICONS_MAP = {
  apple: require('./apple.png'),
  google: require('./google.png'),
}

export const CUSTOM_ICONS = CUSTOM_ICONS_MAP as Record<
  string,
  ImageSourcePropType
>

export type CustomIconName = keyof typeof CUSTOM_ICONS_MAP
