import {buildScreens, ScreensConfig} from './helpers/screen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Groups from '../screens/Groups'
import Home from '../screens/Home'
import Activities from '../screens/Activities'
import Account from '../screens/Account'
import {theme} from 'ui'

const useNotifications = () => ({
  notifications: [],
})

export type TabParamList = {
  Home: undefined
  Groups: undefined
  Activities: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export const TabNavigator = () => {
  const {notifications} = useNotifications()

  const tabScreens: ScreensConfig = {
    Home: {component: Home, tabBar: {icon: 'home'}},
    Groups: {component: Groups, tabBar: {icon: 'view-list'}},
    Activities: {
      component: Activities,
      tabBar: {icon: 'bell-ring'},
      options: notifications.length ? {tabBarBadge: notifications.length} : {},
    },
    Account: {component: Account, tabBar: {icon: 'cog'}},
  }

  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.color.background,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        {buildScreens(Tab, tabScreens)}
      </Tab.Group>
    </Tab.Navigator>
  )
}
