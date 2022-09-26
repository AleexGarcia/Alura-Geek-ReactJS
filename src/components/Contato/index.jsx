import Button from '../Button';
import styles from './Contato.module.scss';

export default function Contato() {
    return (
        <section className={styles.contato}>
            <img src="" alt="" className={styles.contato__logo} />
            <ul className={styles.contato__lista}>
                <li className={styles.contato__item}><a href="#" className={styles.contato__link}>Quem somos nós</a></li>
                <li className={styles.contato__item}>
                    <a href="#" className={styles.contato__link}>
                        Política de privacidade
                    </a>
                </li>
                <li className="contato__item">
                    <a href="#" className={styles.contato__link}>
                        Programa fidelidade
                    </a>
                </li>
                <li className="contato__item">
                    <a href="#" className={styles.contato__link}>
                        Nossas lojas
                    </a>
                </li>
                <li className="contato__item">
                    <a href="#" className={styles.contato__link}>
                        Quero ser franqueado
                    </a>
                </li>
                <li className="contato__item">
                    <a href="#" className={styles.contato__link}>
                        Anuncie aqui
                    </a>
                </li>
            </ul>
            <form action="">
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <textarea type="text" />
                </div>
                <Button color={'primario'}>Enviar mensagem</Button>
            </form>
        </section>
    );
}