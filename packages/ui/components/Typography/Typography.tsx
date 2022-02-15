import {Text} from 'react-native'
import typography from '../../helpers/theme/typography'
import {TypographyProps} from './Typography.model'
import styles from './Typography.style'

export default (props: TypographyProps) => {
  const {
    children,
    color = 'default',
    variant = 'body',
    style,
    numberOfLines = 0,
    testID,
    accessibilityLabel,
  } = props

  const forwardedStyles = Array.isArray(style) ? style : [style]
  const textStyles = {
    ...styles[variant],
    color: color === 'inherit' ? undefined : typography[color],
  }

  let content = children
  if (variant === 'callout2' && typeof children === 'string') {
    content = children.toUpperCase()
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[textStyles, ...forwardedStyles]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      {content}
    </Text>
  )
}
