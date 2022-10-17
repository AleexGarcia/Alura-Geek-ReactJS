import React,{ createContext, useState} from 'react';

const HeaderContext = createContext();

function HeaderProvider({children}){
    
    const [page, setPage] = useState();
    const [busca, setBusca] = useState();
    return(
        <HeaderContext.Provider value={{page, setPage, busca,setBusca}}>
            {children}
        </HeaderContext.Provider>
    );
}

export {HeaderContext, HeaderProvider};