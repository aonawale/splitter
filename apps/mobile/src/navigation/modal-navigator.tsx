import {createStackNavigator} from '@react-navigation/stack'
import {defaultScreenOptions} from './helpers/screen'

export type ModalParamList = {
  Modal: undefined
}

const Modal = createStackNavigator<ModalParamList>()

export const ModalNavigator = () => {
  return (
    <Modal.Navigator screenOptions={defaultScreenOptions}>
      <Modal.Screen name="Modal" component={() => null}></Modal.Screen>
    </Modal.Navigator>
  )
}
