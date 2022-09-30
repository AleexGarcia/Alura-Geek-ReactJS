import React,{ createContext, useState} from 'react';

const Context = createContext();

function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);

    function handleLogin(data){
        let bancoDeDados  = JSON.parse(localStorage.getItem('cadastro'));
        if(bancoDeDados.email == data.email && bancoDeDados.senha == data.senha){
            setAuthenticated(true);
        }
    }


    return(
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};