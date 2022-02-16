import {createStackNavigator} from '@react-navigation/stack'

export type CompleteProfileParamList = {
  AddName: undefined
}

const CompleteProfileStack = createStackNavigator<CompleteProfileParamList>()

export const CompleteProfileStackNavigator = () => (
  <CompleteProfileStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <CompleteProfileStack.Screen name="AddName" component={() => null} />
  </CompleteProfileStack.Navigator>
)
