import {useContext, useState, useMemo, createContext, ReactNode} from 'react'

type CurrentUser = {}

export interface AuthContextValue {
  currentUser: CurrentUser | null
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)

// Provider
/**
 * This provider component handles all application authentication flow. It stores on its state
 * current user information and redirects to login page when no user information is available preventing
 * no authenticated users to access application when placed at root level.
 */

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [currentUser] = useState<CurrentUser | null>(null)
  // const [currentUser] = useState<CurrentUser | null>({name: 'Ahmed'})

  const authContext: AuthContextValue = useMemo(
    () => ({
      currentUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser],
  )

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  )
}

// Hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthContext')
  }
  return context
}
