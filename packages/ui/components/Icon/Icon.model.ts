import {ViewStyle} from 'react-native'
import {CustomIconName} from './custom-icons'

const ICON = {
  plus: 'plus',
  check: 'check',
  close: 'close',
  clear: 'close',
  camera: 'camera',
  pencil: 'pencil',
  pound: 'pound',
  shape: 'shape',
  cash: 'cash',
  replay: 'replay',
  history: 'history',
  bank: 'bank',
  logout: 'logout',
  wallet: 'wallet',
  shield: 'shield',
  bell: 'bell',
  delete: 'delete',
  cog: 'cog',
  bug: 'bug',
  clock: 'clock',
  email: 'email',
  play: 'play',
  pause: 'pause',
  numeric: 'numeric',
  security: 'security',
  lockOpen: 'lock-open',
  checkCircle: 'check-circle',
  arrowRight: 'arrow-right',
  imageMultiple: 'image-multiple',
  messageText: 'message-text',
  fingerprint: 'fingerprint',
  playCircle: 'play-circle',
  pauseCircle: 'pause-circle',
  minusCircle: 'minus-circle',
  deleteForever: 'delete-forever',
  bellRing: 'bell-ring',
  creditCard: 'credit-card',
  faceRecognition: 'face-recognition',
  accountMultiplePlus: 'account-multiple-plus',
  accountMultiple: 'account-multiple',
  chevronRight: 'chevron-right',
  accountSearch: 'account-search',
  accountCircle: 'account-circle',
  accountPlus: 'account-plus',
  accountSwitch: 'account-switch',
  alertCircle: 'alert-circle',
  alertOctagon: 'alert-octagon',
}

export type IconName = keyof typeof ICON

export interface IconProps {
  name: IconName | CustomIconName
  color?: 'default' | 'primary' | 'secondary' | 'inherit' | 'destructive'
  size?: '2x' | '3x' | '4x' | 'lg' | 'sm' | 'xs'
  style?: ViewStyle | ViewStyle[]
  type?: 'solid' | 'outline'
}
