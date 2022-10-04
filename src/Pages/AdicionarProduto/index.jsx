import styles from './AdicionarProduto.module.scss';
import Button from '../../components/Button';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setLocale } from 'yup';

export default function AdicionarProduto() {

    const [valores, setValores] = useState({
        titulo: 'Adicionar novo produto',
        botao: 'Adicionar produto',
        imagem: '',
        categoria: '',
        nome: '',
        preco: '0',
        descricao: ''
    });



    const schema = yup.object().shape({
        imagem: yup.string().required('Deve informar o URL da imagem do produto'),
        categoria: yup.string().required('Deve informar a categoria do produto'),
        nome: yup.string().required('Deve informar o nome do produto'),
        preco: yup.number().typeError('Aceita apenas numeros').required('Deve informar um numero').positive('Deve informar um numero positivo'),
        descricao: yup.string().required('Entre com a descrição do produto')
    });


    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            imagem: valores.imagem,
            categoria: valores.categoria,
            nome: valores.nome,
            preco: valores.preco,
            descricao: valores.descricao
        }, shouldUnregister: true,
        resolver: yupResolver(schema),

    });



    let { id } = useParams();

    useEffect(() => {

        (async () => {
            if (id != undefined) {
                const resposta = await fetch(`http://localhost:3000/produtos/${id}`);
                const produto = await resposta.json();
                setValores({
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

    }, []);

    useEffect(() => {

        setValue('imagem', valores.imagem);
        setValue('categoria', valores.categoria);
        setValue('nome', valores.nome);
        setValue('preco', valores.preco);
        setValue('descricao', valores.descricao);

    }, [valores]);

    const { setPage } = useContext(HeaderContext);

    let navigate = useNavigate();


    useEffect(() => {
        setPage(true);

    });



    const onSubmit = data => {
    
        if (id != undefined) {
            fetch(`http://localhost:3000/produtos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imagem: data.imagem,
                    categoria: data.categoria,
                    nome: data.nome,
                    preco: data.preco,
                    descricao: data.descricao
                })
            });
            navigate('/dashboard');

        } else {
            fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            navigate('/dashboard');
        }

    };


    return (
        <main>
            <section className={classNames(styles.adicionar, 'container')}>
                <h2 className={styles.adicionar__titulo}>{valores.titulo}</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.adicionar__formulario}>
                    <div className={styles.inputBox}>
                        <label htmlFor="">URL da imagem</label>
                        <input  {...register('imagem')} type="text" />
                    </div>
                    {errors.imagem && <p>{errors.imagem.message}</p>}
                    <div className={styles.inputBox}>
                        <label htmlFor="">Categorias</label>
                        <input   {...register('categoria')} type="text" />
                    </div>
                    {errors.categoria && <p>{errors.categoria.message}</p>}
                    <div className={styles.inputBox}>
                        <label htmlFor="">Nome do produto</label>
                        <input   {...register('nome', { required: 'Informe o nome do produto' })} type="text" />
                    </div>
                    {errors.nome && <p>{errors.nome.message}</p>}
                    <div className={styles.inputBox}>
                        <label htmlFor="">Preço do produto</label>
                        <input type='number' {...register('preco')} />
                    </div>
                    {errors.preco && <p>{errors.preco.message}</p>}
                    <div className={styles.inputBox}>
                        <textarea  {...register('descricao')} type="text" placeholder='Descrição do produto'>
                        </textarea>
                    </div>
                    {errors.descricao && <p>{errors.descricao.message}</p>}
                    <Button color={'primario'}>{valores.botao}</Button>
                </form>
            </section>
        </main>
    );
}