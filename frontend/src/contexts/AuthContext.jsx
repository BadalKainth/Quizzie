import { createContext, useState } from 'react'

/**
 * Whatever your context object type.
 * @typedef AuthContextType
 * @property {object} user
 * @property {function} setUser
 * @property {boolean} isLoading
 * @property {function} setIsLoading
 */

/**
 * @type {import("react").Context<AuthContextType>}
 *
 */
export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
