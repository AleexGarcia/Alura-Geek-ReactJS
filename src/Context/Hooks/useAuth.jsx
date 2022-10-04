import { useState } from 'react';

export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);
    const [tentativaDeLogin, setTentativaDeLogin] = useState(false);
    async function handleLogin(data) {
        
        let bancoDeDados = JSON.parse(localStorage.getItem('cadastro'));
        if(bancoDeDados != null) {
            bancoDeDados.forEach(element => {
                if (element.email == data.email && element.senha == data.senha) {
                    setAuthenticated(true);
                }
    
            });
        }
        setTentativaDeLogin(true);

    }

    return { authenticated,tentativaDeLogin, handleLogin };
}
