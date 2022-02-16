import {createRef} from 'react'
import {
  PartialState,
  NavigationState,
  NavigationContainerRef,
} from '@react-navigation/native'
import {remove} from '../../helpers/storage'

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE'
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/App.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['Welcome', 'Home']
export const canExit = (routeName: string) => exitRoutes.includes(routeName)

export const isReadyRef = createRef<boolean | null>()
export const navigationRef = createRef<NavigationContainerRef<any>>()

export const navigate = (name: string, params: any) =>
  navigationRef.current?.navigate(name, params)

export const clearNavigationPersistence = () =>
  remove(NAVIGATION_PERSISTENCE_KEY)

/**
 * Gets the current screen from any navigation state.
 */
export const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState>,
): string | undefined => {
  const route = state.routes[state.index || 0]

  // Found the active route -- return the name
  if (!route.state) return route.name

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state)
}
