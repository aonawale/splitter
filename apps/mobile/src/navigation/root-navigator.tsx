/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your UserNavigator) which the user
 * will use once logged in.
 */
import React, {forwardRef, ComponentProps} from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {UserNavigator} from './user-navigator'
import {AuthNavigator} from './auth-navigator'
import {useCurrentUser} from '../hooks/current-user'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

export type RootNavigatorParamList = {
  User: undefined
  Auth: undefined
}

const Stack = createStackNavigator<RootNavigatorParamList>()

const RootStack = () => {
  const currentUser = useCurrentUser()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // https://github.com/react-navigation/react-navigation/issues/7839
      initialRouteName={currentUser ? 'User' : 'Auth'}
    >
      {currentUser ? (
        <Stack.Screen name="User" component={UserNavigator} />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: !currentUser ? 'pop' : 'push',
          }}
        />
      )}
    </Stack.Navigator>
  )
}

export const RootNavigator = forwardRef<
  NavigationContainerRef<any>,
  Partial<ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = 'RootNavigator'
