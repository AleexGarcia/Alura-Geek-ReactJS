import styles from './Cadastro.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';

export default function Cadastro() {

    const { setPage } = useContext(HeaderContext);
    useEffect(() => {
        setPage(true);
    });

    const { register, handleSubmit } = useForm();

    let navigate = useNavigate();

    const onSubmit = data => {

        if (data.senha === data.confSenha && data.confEmail === data.email) {
           
            let cadastro = {
                email: data.email,
                senha: data.senha,
            };
         
            if (localStorage.getItem('cadastro') === null) {
                let dados = [];
                dados.push(cadastro);
                localStorage.setItem('cadastro', JSON.stringify(dados));
            }else{
                let dados = JSON.parse(localStorage.getItem('cadastro'));
                dados.push(cadastro);
                localStorage.setItem('cadastro', JSON.stringify(dados));
            }
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