import Button from '../../Button';
import styles from './Contato.module.scss';
import logo from '../../../assets/Header/Logo.svg';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export default function Contato() {

    const [enviado, setEnviado] = useState(false);
    const schema = yup.object().shape({

        nome: yup
            .string()
            .max(20, 'Maximo de 20 caractares')
            .required('Deve informar seu nome!')
            .trim('Deve fornecer um nome válido e nao apenas espaços em branco'),
        mensagem: yup
            .string()
            .max(120, 'Maximo de 120 caractares')
            .required('Deve dizer o que deseja!')
            .trim('Deve fornecer uma mensagem válida e nao apenas espaços em branco')

    }).required('Deve preencher todo o formulario para enviar!');

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { nome: '', mensagem: '' },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        schema
            .isValid(data)
            .then((valid) => {
                setEnviado(valid);
            });
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
                    <label htmlFor="nome">Nome</label>
                    <input {...register('nome')} type="text" />
                </div>
                {errors.nome && <p className={styles.contato__mensagemErro}>{errors.nome.message}</p>}
                <div className={styles.inputBox}>
                    <textarea {...register('mensagem')} type="text" placeholder='Escreva sua mensagem' />
                </div>
                {errors.mensagem && <p className={styles.contato__mensagemErro}>{errors.mensagem.message}</p>}

                <Button color={'primario'}>Enviar mensagem</Button>
                {enviado && <span>Mensagem enviada com sucesso!</span>}

            </form>
        </section>
    );
}