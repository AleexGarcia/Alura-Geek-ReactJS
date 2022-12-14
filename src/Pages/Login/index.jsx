import styles from './Login.module.scss';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { setPage } = useContext(HeaderContext);
    const { authenticated } = useContext(AuthContext);
    const { handleLogin } = useContext(AuthContext);
    const [tentativa, setTentativa] = useState(false);
    useEffect(() => {
        setPage(true);
    });

    useEffect(() => {
        if (authenticated) {
            navigate('/dashboard');
        }
    }, [authenticated]);

    const { register, handleSubmit } = useForm();



    let navigate = useNavigate();

    const onSubmit = data => {

        handleLogin(data);
        setTentativa(true);
    };

    function redirecionarCadastro() {
        navigate('/cadastro');
    }


    return (
        <main className={styles.login}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario} >
                <h2 className={styles.login__titulo}>Iniciar Sessão</h2>
                <div className={styles.inputBox}>
                    <input required {...register('email')} id='email' className={styles.inputBox__input} placeholder=" " type="email" />
                    <label className={styles.inputBox__label} htmlFor="email">Escreva seu email</label>
                </div>
                <div className={styles.inputBox}>
                    <input required {...register('senha')} className={styles.inputBox__input} id='senha'
                        placeholder=" " type='password' />
                    <label className={styles.inputBox__label} htmlFor="senha">Escreva sua senha</label>
                </div>
                {tentativa && <p>Login não cadastrado ou senha incorreta!</p>}
                <Button
        
                    color={'primario'}
                >Entrar</Button>
            </form>
            <Button
                funcao={redirecionarCadastro}
                color={'secundario'}
            >Criar nova conta</Button>
        </main >
    );
}