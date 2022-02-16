/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useCurrentUser} from '../hooks/current-user'
import {NavigatorScreenParams} from '@react-navigation/native'
import {ModalNavigator, ModalParamList} from './modal-navigator'
import {StackNavigator, StackParamList} from './stack-navigator'
import {CompleteProfileStackNavigator} from './complete-profile-navigator'

export type UserParamList = {
  Stack: NavigatorScreenParams<StackParamList>
  Modal: NavigatorScreenParams<ModalParamList>
}

const User = createStackNavigator<UserParamList>()

export const UserNavigator = () => {
  const currentUser = useCurrentUser()
  return !currentUser?.name ? (
    <CompleteProfileStackNavigator />
  ) : (
    <User.Navigator screenOptions={{presentation: 'modal', headerShown: false}}>
      <User.Screen name="Stack" component={StackNavigator} />
      <User.Screen name="Modal" component={ModalNavigator} />
    </User.Navigator>
  )
}
