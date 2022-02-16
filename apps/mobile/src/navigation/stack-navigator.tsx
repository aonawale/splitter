import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import {defaultScreenOptions} from './helpers/screen'
import {TabNavigator, TabParamList} from './tab-navigator'
import {Platform, StyleSheet} from 'react-native'
import {NavigatorScreenParams} from '@react-navigation/native'

const screenOptions: StackNavigationOptions = {
  ...defaultScreenOptions,
  headerStyle: StyleSheet.compose(defaultScreenOptions.headerStyle, {
    shadowOpacity: 0,
    elevation: 0,
  }),
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    paddingLeft: 8,
  },
  headerTitleStyle: {
    fontSize: 30,
  },
  headerTitleContainerStyle: Platform.select({
    ios: {left: 55},
  }),
}

type SettingsParamList = {
  Settings: undefined
  Profile: undefined
}

export type StackParamList = SettingsParamList

const Stack = createStackNavigator<
  StackParamList & {
    Tab: NavigatorScreenParams<TabParamList>
  }
>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  )
}
