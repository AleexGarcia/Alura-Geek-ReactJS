import Produtos from './Produtos';
import dadosProdutos from '../../Data/produtos.json';
import styles from './Home.module.scss';
import Banner from './Banner';
import { useEffect } from 'react';
export default function Home(props) {
    
    useEffect(()=>{
        props.setPage(true);
    });

    return (
        <main className={styles.home}>
            <Banner/>
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'StarWars')}
            />
            <Produtos
                id={'consoles'}
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Consoles')}
            />
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Diversos')}
            />
        </main>
    );
}