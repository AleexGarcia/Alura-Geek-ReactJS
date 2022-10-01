import Button from '../../Button';
import styles from './Contato.module.scss';
import logo from '../../../assets/Header/Logo.svg';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';


export default function Contato() {


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    };

    return (
        <section className={classNames(styles.contato, 'container')}>
            <img src={logo} alt="" className={styles.contato__logo} />
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
            <form className={styles.contato__formulario} onSubmit={handleSubmit(onSubmit)} action="">
                <h3>Fale conosco</h3>
                <div className={styles.inputBox}>
                    <label htmlFor="">Nome</label>
                    <input {...register('nome')} type="text" />
                </div>
                <div className={styles.inputBox}>
                    <textarea {...register('mensagem')} type="text" placeholder='Escreva sua mensagem' />
                </div>
                <Button color={'primario'}>Enviar mensagem</Button>
            </form>
        </section>
    );
}