import {IconProps} from './Icon.model'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, Image} from 'react-native'
import {CustomIconName, CUSTOM_ICONS} from './custom-icons'

const sizeMap: any = {
  xs: 16 * 0.75,
  sm: 16 * 0.875,
  lg: 16 * 1.33,
  '2x': 16 * 2,
  '4x': 16 * 4,
}

const CustomIcon = ({name, size, style}: IconProps) => (
  <View style={[{width: size, height: size}, style]}>
    <Image resizeMode="contain" source={CUSTOM_ICONS[name]} />
  </View>
)

export default ({size, name, type, ...rest}: IconProps) => {
  const iconName = type === 'outline' ? `${name}-outline` : name
  const iconSize = size ? sizeMap[size] : 'inherit'

  return !MaterialCommunityIcons.hasIcon(iconName) ? (
    <CustomIcon name={iconName as CustomIconName} size={iconSize} {...rest} />
  ) : (
    <MaterialCommunityIcons name={iconName} size={iconSize} {...rest} />
  )
}
