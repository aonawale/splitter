import {TextStyle, StyleSheet} from 'react-native'
import {Screen, Layout, Icon, Button, Typography, theme} from 'ui'

export default () => {
  return (
    <Screen backgroundColor={theme.color.primary} statusBar="light-content">
      <Layout
        padding={{vertical: 'default', horizontal: 'extraLarge'}}
        flex={1}
      >
        <Layout flex={1} justifyContent="center">
          <Typography style={[styles.text, styles.ajoText]}>Ajo</Typography>
          <Layout
            alignContent="center"
            justifyContent="center"
            padding={{vertical: 'default'}}
            flexDirection="row"
          >
            <Icon size="4x" name="pencil" />
          </Layout>
          <Typography style={[styles.text, styles.getMoneyText]}>
            Get your money under control
          </Typography>
        </Layout>
        <Button onPress={() => {}}>Get started</Button>
      </Layout>
    </Screen>
  )
}

const styles = StyleSheet.create<{
  ajoText: TextStyle
  getMoneyText: TextStyle
  text: TextStyle
}>({
  ajoText: {
    fontSize: 56,
    lineHeight: 56,
  },

  getMoneyText: {
    fontSize: 32,
  },
  text: {
    color: theme.color.white,
    fontWeight: '600',
    lineHeight: 40,
    textAlign: 'center',
  },
})
