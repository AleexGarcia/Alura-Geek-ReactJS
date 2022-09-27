import Produtos from './Produtos';
import dadosProdutos from '../../dados/produtos.json';
import styles from './Home.module.scss';

export default function Home() {
        
    return (
        <main className={styles.home}>
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'StarWars')}
            />
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Consoles')}
            />
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Diversos')}
            />
        </main>
    );
}