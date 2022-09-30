import { useState } from 'react';

export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(data) {
        let bancoDeDados = JSON.parse(localStorage.getItem('cadastro'));
        if (bancoDeDados.email == data.email && bancoDeDados.senha == data.senha) {
            setAuthenticated(true);
        }
    }
    return { authenticated, handleLogin };
}
