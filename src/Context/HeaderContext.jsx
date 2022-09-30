import React,{ createContext, useState} from 'react';

const HeaderContext = createContext();

function HeaderProvider({children}){
    
    const [page, setPage] = useState();

    return(
        <HeaderContext.Provider value={{page, setPage}}>
            {children}
        </HeaderContext.Provider>
    );
}

export {HeaderContext, HeaderProvider};