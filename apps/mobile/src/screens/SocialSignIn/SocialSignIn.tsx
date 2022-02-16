import {Screen, Layout, Button, Typography} from 'ui'
import {useAuthNavigator} from '../../hooks/navigator'

const SocialSignIn = () => {
  const navigator = useAuthNavigator()

  return (
    <Screen>
      <Layout
        padding={{vertical: 'default', horizontal: 'extraLarge'}}
        flex={1}
      >
        <Layout flex={1} justifyContent="center">
          <Typography>Back</Typography>
        </Layout>
        <Button onPress={() => navigator.pop()}>Welcome</Button>
      </Layout>
    </Screen>
  )
}

export default SocialSignIn
