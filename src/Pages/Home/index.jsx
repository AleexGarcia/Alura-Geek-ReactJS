import Produtos from './Produtos';
import dadosProdutos from '../../Data/produtos.json';
import styles from './Home.module.scss';
import Banner from './Banner';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';

export default function Home() {


    const { setPage } = useContext(HeaderContext);
    useEffect(()=>{
        setPage(true);
    });


    return (
        <main className={styles.home}>
            <Banner />
            <Produtos
                produtos={dadosProdutos.produtos.filter(produto => produto.categoria === 'StarWars')}
            />
            <Produtos
                id={'consoles'}
                produtos={dadosProdutos.produtos.filter(produto => produto.categoria === 'Consoles')}
            />
            <Produtos
                produtos={dadosProdutos.produtos.filter(produto => produto.categoria === 'Diversos')}
            />
        </main>
    );
}