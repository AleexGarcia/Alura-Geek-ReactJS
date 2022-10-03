import styles from './AdicionarProduto.module.scss';
import Button from '../../components/Button';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdicionarProduto() {

    const { register, handleSubmit } = useForm();
    const { setPage } = useContext(HeaderContext);
    const [values, setValues] = useState({
        titulo: 'Adicionar novo produto',
        botao: 'Adicionar produto',
        imagem: '',
        categoria: '',
        nome: '',
        preco: '',
        descricao: ''
    });

    let navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        setPage(true);

    });

    useEffect(() => {
        (async () => {
            if (id != undefined) {
                const resposta = await fetch(`http://localhost:3000/produtos/${id}`);
                const produto = await resposta.json();
                setValues({
                    titulo: 'Editar o produto',
                    botao: 'Editar Produto',
                    imagem: produto.imagem,
                    categoria: produto.categoria,
                    nome: produto.nome,
                    preco: produto.preco,
                    descricao: produto.descricao
                });
            }
        })();

    },[]);


    const onSubmit =  data => {
  
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        navigate('/dashboard');
    };

    return (
        <main>
            <section className={classNames(styles.adicionar, 'container')}>
                <h2 className={styles.adicionar__titulo}>{values.titulo}</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.adicionar__formulario}>
                    <div className={styles.inputBox}>
                        <label htmlFor="">URL da imagem</label>
                        <input value={values.imagem} required {...register('imagem')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Categorias</label>
                        <input value={values.categoria} required {...register('categoria')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Nome do produto</label>
                        <input value={values.nome} required {...register('nome')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Preço do produto</label>
                        <input value={values.preco} required {...register('preco')} type="text" />
                    </div>
                    <div className={styles.inputBox}>
                        <textarea value={values.descricao} required {...register('descricao')} type="text" placeholder='Descrição do produto'>

                        </textarea>
                    </div>
                    <Button color={'primario'}>{values.botao}</Button>
                </form>
            </section>
        </main>
    );
}