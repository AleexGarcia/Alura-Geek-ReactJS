import styles from './AdicionarProduto.module.scss';
import Button from '../../components/Button';
import classNames from 'classnames';
import React,{useEffect} from 'react';

export default function AdicionarProduto(props) {
    useEffect(() => {
        props.setPage(true);
    });

    return (
        <main>
            <section className={classNames(styles.adicionar, 'container')}>
                <h2 className={styles.adicionar__titulo}>Adicionar novo produto</h2>
                <form action="" className={styles.adicionar__formulario}>
                    <div className={styles.inputBox}>
                        <label htmlFor="">URL da imagem</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Categorias</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Nome do produto</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Preço do produto</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <textarea type="text" placeholder='Descrição do produto' />
                    </div>
                    <Button color={'primario'}>Enviar mensagem</Button>
                </form>
            </section>
        </main>
    );
}