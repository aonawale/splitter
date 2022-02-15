import {View, ViewStyle} from 'react-native'
import {getSpacingStyle} from './Layout.helpers'
import {LayoutProps, VIEW_STYLES_PROPS_ARRAY} from './Layout.model'

const makeStyle = (props?: LayoutProps): ViewStyle => {
  if (!props) return {}
  const styles = Object.entries(props).reduce<Record<string, string>>(
    (accum, [key, val]) => {
      if (VIEW_STYLES_PROPS_ARRAY.includes(key as any)) {
        accum[key] = val
      }
      return accum
    },
    {},
  )
  return {
    ...getSpacingStyle('margin', props.margin),
    ...getSpacingStyle('padding', props.padding),
    ...styles,
  }
}

const Layout = ({style, children, ...rest}: LayoutProps) => {
  return <View style={[makeStyle(rest), style]}>{children}</View>
}

export default Layout
