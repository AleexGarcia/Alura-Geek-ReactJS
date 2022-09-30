import styles from './Cadastro.module.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function Cadastro(props) {


    useEffect(() => {
        props.setPage(false);
    });

    const { register, handleSubmit } = useForm();

    let navigate = useNavigate();
   
    const onSubmit = data => {
        console.log(data.email == data.confemail);
        if (data.senha === data.confSenha && data.confEmail === data.email) {
            console.log('entrei');
            let cadastro = {
                email: data.email,
                senha: data.senha,
            };
            localStorage.setItem('cadastro', JSON.stringify(cadastro));
            navigate('/login');
        }


    };


    return (
        <main className={styles.cadastro}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario} >
                <h2 className={styles.cadastro__titulo}>Crie sua conta</h2>
                <div className={styles.inputBox}>
                    <input required {...register('email')} id='email' className={styles.inputBox__input} placeholder=" " type="email" />
                    <label className={styles.inputBox__label} htmlFor="email">Escreva seu email</label>
                </div>
                <div className={styles.inputBox}>
                    <input required {...register('confEmail')} id='confirmacaoEmail' className={styles.inputBox__input} placeholder=" " type="email" />
                    <label className={styles.inputBox__label} htmlFor="confirmacaoEmail">Confirmar e-mail</label>
                </div>
                <div className={styles.inputBox}>
                    <input required {...register('senha')} className={styles.inputBox__input} id='senha'
                        placeholder=" " type='text' />
                    <label className={styles.inputBox__label} htmlFor="senha">Escreva sua senha</label>
                </div>
                <div className={styles.inputBox}>
                    <input required {...register('confSenha')} className={styles.inputBox__input} id='confirmacaoSenha'
                        placeholder=" " type='text' />
                    <label className={styles.inputBox__label} htmlFor="confirmacaoSenha">Confirme sua senha</label>
                </div>
                <Button
                    color={'primario'}
                >Cadastrar</Button>
            </form>

        </main>
    );
}