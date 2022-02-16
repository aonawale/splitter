import {useNavigation} from '@react-navigation/native'
import {UserParamList} from '../navigation/user-navigator'
import {StackParamList} from '../navigation/stack-navigator'
import {ModalParamList} from '../navigation/modal-navigator'
import {StackNavigationProp} from '@react-navigation/stack'
import {useMemo} from 'react'
import {TabParamList} from '../navigation/tab-navigator'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {AuthNavigatorParamList} from '../navigation'

export const useNavigator = () => {
  const tab = useNavigation<BottomTabNavigationProp<TabParamList>>()
  const stack = useNavigation<StackNavigationProp<UserParamList, 'Stack'>>()
  const modal = useNavigation<StackNavigationProp<UserParamList, 'Modal'>>()

  const push = <RouteName extends keyof StackParamList>(
    screen: RouteName,
    params?: StackParamList[RouteName],
  ) => {
    stack.navigate('Stack', {screen, params})
  }

  const present = <RouteName extends keyof ModalParamList>(
    screen: RouteName,
    params?: ModalParamList[RouteName],
  ) => modal.navigate('Modal', {screen, params})

  const pop = (count?: number) => stack.pop(count)

  const dismiss = (count?: number) => modal.pop(count)

  const gotoTab = <RouteName extends keyof TabParamList>(
    tabName: RouteName,
    params?: TabParamList[RouteName],
  ) => tab.jumpTo(tabName, params)

  return useMemo(
    () => ({
      tab,
      stack,
      modal,
      push,
      present,
      pop,
      dismiss,
      gotoTab,
    }),
    [],
  )
}

export const useAuthNavigator = () => {
  const nav = useNavigation<StackNavigationProp<AuthNavigatorParamList>>()

  const push = <RouteName extends keyof AuthNavigatorParamList>(
    screen: RouteName,
    params?: AuthNavigatorParamList[RouteName],
  ) => nav.navigate(screen, params)

  const pop = (count?: number) => nav.pop(count)

  return useMemo(
    () => ({
      push,
      pop,
    }),
    [],
  )
}
