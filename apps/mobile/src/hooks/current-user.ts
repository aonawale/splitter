import {AuthContext} from '../contexts/auth'
import {useContext} from 'react'

type CurrentUser = {name?: string}

export const useCurrentUser = (): CurrentUser | null => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a AuthContext')
  }
  return context.currentUser
}
