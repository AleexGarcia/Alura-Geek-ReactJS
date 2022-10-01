import styles from './AdicionarProduto.module.scss';
import Button from '../../components/Button';
import classNames from 'classnames';
import { useContext,useEffect } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
import {useForm} from 'react-hook-form';

export default function AdicionarProduto() {

    const {register, handleSubmit} = useForm();
    const { setPage } = useContext(HeaderContext);
    
    useEffect(()=>{
        setPage(true);
    });
    
    const onSubmit = data => {

        console.log(data);


    };

    return (
        <main>
            <section className={classNames(styles.adicionar, 'container')}>
                <h2 className={styles.adicionar__titulo}>Adicionar novo produto</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.adicionar__formulario}>
                    <div className={styles.inputBox}>
                        <label htmlFor="">URL da imagem</label>
                        <input  {...register('imagem')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Categorias</label>
                        <input  {...register('categoria')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Nome do produto</label>
                        <input  {...register('nome')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Preço do produto</label>
                        <input  {...register('preco')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <textarea {...register('descricao')}  type="text" placeholder='Descrição do produto'>

                        </textarea>
                    </div>
                    <Button color={'primario'}>Enviar mensagem</Button>
                </form>
            </section>
        </main>
    );
}