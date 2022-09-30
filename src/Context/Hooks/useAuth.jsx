import { useState } from 'react';

export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(data) {
        let bancoDeDados = JSON.parse(localStorage.getItem('cadastro'));
        
        bancoDeDados.forEach(element => {
            if (element.email == data.email && element.senha == data.senha) {
                setAuthenticated(true);
            }

        });

    }
    return { authenticated, handleLogin };
}
