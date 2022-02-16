import {Screen, Layout, Icon, Button, Typography} from 'ui'
import {useAuthNavigator} from '../../hooks/navigator'

const Welcome = () => {
  const navigator = useAuthNavigator()

  return (
    <Screen>
      <Layout
        padding={{vertical: 'default', horizontal: 'extraLarge'}}
        flex={1}
      >
        <Layout flex={1} justifyContent="center">
          <Typography>Welcome</Typography>
          <Layout
            alignContent="center"
            justifyContent="center"
            padding={{vertical: 'default'}}
            flexDirection="row"
          >
            <Icon size="4x" name="pencil" />
          </Layout>
          <Typography>Foo</Typography>
        </Layout>
        <Button onPress={() => navigator.push('SocialSignIn')}>
          Get started
        </Button>
      </Layout>
    </Screen>
  )
}

export default Welcome
