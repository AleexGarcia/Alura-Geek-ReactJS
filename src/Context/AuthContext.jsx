import React, { createContext } from 'react';

import useAuth from './Hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {

    const {
        authenticated, handleLogin, tentativaDeLogin
    } = useAuth();
    return (
        <AuthContext.Provider value={{ authenticated, tentativaDeLogin, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };