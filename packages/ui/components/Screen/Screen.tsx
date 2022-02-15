import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ScreenProps} from './Screen.model'
import {isNonScrolling, presets} from './Screen.style'
// import {useHeaderHeight} from '@react-navigation/stack'
import {color} from '../../helpers/theme/color'

const useHeaderHeight = () => 64

const keyboardAvoidingViewBehavior =
  Platform.OS === 'ios' ? 'padding' : 'height'

const getBackgroundStyle = (backgroundColor: string | undefined) =>
  backgroundColor ? {backgroundColor: backgroundColor} : {}

const ScreenWithoutScrolling = ({
  style,
  safeArea = true,
  backgroundColor = color.background,
  statusBarBackgroundColor,
  statusBar = 'dark-content',
  safeAreaEdges = ['right', 'bottom', 'left'], // skip top because RN auto applies safe area for navbar
  children,
  ...rest
}: ScreenProps) => {
  const preset = presets.fixed
  const backgroundStyle = getBackgroundStyle(backgroundColor)
  const ViewComponent = safeArea ? SafeAreaView : View
  const headerHeight = useHeaderHeight()

  return (
    <ViewComponent
      style={[preset.outer, backgroundStyle]}
      edges={safeAreaEdges}
      {...rest}
    >
      <KeyboardAvoidingView
        style={[preset.outer, backgroundStyle]}
        behavior={keyboardAvoidingViewBehavior}
        keyboardVerticalOffset={headerHeight}
      >
        <StatusBar
          barStyle={statusBar}
          backgroundColor={statusBarBackgroundColor || backgroundColor}
        />
        <View style={[preset.inner, style]}>{children}</View>
      </KeyboardAvoidingView>
    </ViewComponent>
  )
}

const ScreenWithScrolling = ({
  style,
  safeArea,
  backgroundColor,
  statusBarBackgroundColor,
  statusBar = 'dark-content',
  safeAreaEdges,
  children,
  keyboardShouldPersistTaps,
  ...rest
}: ScreenProps) => {
  const preset = presets.scroll
  const backgroundStyle = getBackgroundStyle(backgroundColor)
  const ViewComponent = safeArea ? SafeAreaView : View
  const headerHeight = useHeaderHeight()

  return (
    <ViewComponent
      style={[preset.outer, backgroundStyle]}
      edges={safeAreaEdges}
      {...rest}
    >
      <KeyboardAvoidingView
        style={[preset.outer, backgroundStyle]}
        behavior={keyboardAvoidingViewBehavior}
        keyboardVerticalOffset={headerHeight}
      >
        <StatusBar
          barStyle={statusBar}
          backgroundColor={statusBarBackgroundColor || backgroundColor}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </ViewComponent>
  )
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export default (props: ScreenProps) =>
  isNonScrolling(props.preset) ? (
    <ScreenWithoutScrolling {...props} />
  ) : (
    <ScreenWithScrolling {...props} />
  )
