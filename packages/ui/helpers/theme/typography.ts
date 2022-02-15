import {color} from './color'

export const textColors = <const>{
  primary: color.black,
  primaryRGB: '3, 13, 32' /* matter[500] in RGB */,
  primaryAlt: color.black,
  secondary: color.secondary,
  disabled: color.black,
  borderLight: color.black,
  error: color.error,
}

export default <const>{
  primaryTextColor: textColors.primary,
  primaryTextColorAlt: textColors.primaryAlt,
  secondaryTextColor: textColors.secondary,
  errorTextColor: textColors.error,

  default: textColors.primary,
  secondary: textColors.secondary,
  link: color.primary,
  alert: textColors.error,
  white: color.white,
}
