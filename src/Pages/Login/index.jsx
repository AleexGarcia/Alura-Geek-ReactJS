import styles from './Login.module.scss';
import Button from '../../components/Button';
export default function Login() {
    return (
        <main className={styles.login}>
            <form className={styles.formulario} action="">
                <h2 className={styles.login__titulo}>Iniciar Sessão</h2>
                <div className={styles.inputBox}>
                    <input id='email' className={styles.inputBox__input} placeholder=" " type="email" />
                    <label className={styles.inputBox__label} htmlFor="email">Escreva seu email</label>
                </div>
                <div className={styles.inputBox}>
                    <input className={styles.inputBox__input} id='senha'
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