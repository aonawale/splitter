/**
 * App
 *
 * @format
 */
import '../config'
import {Provider, appTheme} from 'ui'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import {RootNavigator, navigationRef} from '../navigation'
import {AuthProvider} from '../contexts/auth'

const App = () => {
  return (
    <Provider>
      <AuthProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator theme={appTheme} ref={navigationRef} />
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
