import styles from './Login.module.scss';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export default function Login() {
    const { register, handleSubmit } = useForm();

    let navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        navigate('../dashboard');
    };


  

    return (
        <main className={styles.login}>
            <form  onSubmit={handleSubmit(onSubmit)} className={styles.formulario} >
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
                <Button
                    color={'primario'}
                >Entrar</Button>
            </form>

        </main >
    );
}