/**
 * This is the navigator you will modify to display the logged-out screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 */
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import SocialSignIn from '../screens/SocialSignIn'
import {defaultScreenOptions} from './helpers/screen'
import {StyleSheet} from 'react-native'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type AuthNavigatorParamList = {
  Welcome: undefined
  SocialSignIn: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<AuthNavigatorParamList>()

const headerStyle = StyleSheet.compose(defaultScreenOptions.headerStyle, {
  shadowOpacity: 0,
  elevation: 0,
})

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultScreenOptions,
        headerBackTitleVisible: false,
        headerTitle: '',
        headerStyle: headerStyle,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SocialSignIn" component={SocialSignIn} />
    </Stack.Navigator>
  )
}
