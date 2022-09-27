import Produtos from './Produtos';
import dadosProdutos from '../../Data/produtos.json';
import styles from './Home.module.scss';
import Banner from './Banner';
export default function Home() {

    return (
        <main className={styles.home}>
            <Banner/>
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