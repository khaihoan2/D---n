import React, { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value="Text value" >{children}</AuthContext.Provider>
    )
}

export default AuthContext