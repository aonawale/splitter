import {capitalize, snakeCase} from 'lodash'
// import {HeaderIconButton} from '../components/icon-button'
import {TypedNavigator} from '@react-navigation/native'
import {StackNavigationOptions} from '@react-navigation/stack'
import {Platform, ViewStyle} from 'react-native'
import {Icon, theme} from 'ui'

export type ScreenConfig = {
  component: () => JSX.Element
  modal?: boolean
  title?: string
  tabBar?: {icon: string}
  options?: any
}
export type ScreensConfig = {
  [Key: string]: ScreenConfig
}

export const title = (str: string) =>
  capitalize(snakeCase(str).replace('_', ' '))

export const modalHeaderBack = () => ({
  headerBackTitleVisible: false,
  // headerBackImage: () => <HeaderIconButton icon="close" size={24} />,
})

const headerStyle: ViewStyle = {
  backgroundColor: theme.color.background,
}
export const defaultScreenOptions: StackNavigationOptions = {
  headerStyle,
  headerTintColor: theme.color.black,
  headerLeftContainerStyle: {
    paddingLeft: Platform.select({
      ios: 8,
    }),
  },
}

export const buildScreens = (
  naviator: TypedNavigator<any, any, any, any, any>,
  config: ScreensConfig,
) =>
  Object.entries(config).map(([name, screen]) => (
    <naviator.Screen
      key={name}
      name={name}
      component={screen.component}
      options={{
        title: screen.title ?? title(name),
        ...(screen.modal ? modalHeaderBack() : {}),
        ...(screen.tabBar
          ? {
              tabBarIcon: (props: any) => (
                <Icon {...props} name={screen.tabBar?.icon} />
              ),
            }
          : {}),
        ...screen.options,
      }}
    />
  ))
