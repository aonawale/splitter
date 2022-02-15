import {StyleSheet} from 'react-native'
import {human, systemWeights} from 'react-native-typography'

const styles = StyleSheet.create({
  body: human.bodyObject,
  callout: human.calloutObject,
  callout2: {
    ...human.footnoteObject,
    ...systemWeights.bold,
  },
  callout3: {
    ...human.footnoteObject,
    ...systemWeights.regular,
    textTransform: 'uppercase',
  },
  calloutBold: {
    ...human.calloutObject,
    ...systemWeights.semibold,
  },
  caption1: human.caption1Object,
  caption1Caps: {
    ...human.caption1Object,
    textTransform: 'uppercase',
  },
  caption2: human.caption2Object,
  footnote: human.footnoteObject,
  headline: human.headlineObject,
  largeTitle: {
    ...human.largeTitleObject,
    ...systemWeights.bold,
  },
  subhead: human.subheadObject,
  title1: human.title1Object,
  title2: human.title2Object,
  title3: human.title3Object,
})

export default styles
