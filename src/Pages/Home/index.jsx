import Produtos from './Produtos';
import dadosProdutos from '../../Data/produtos.json';
import styles from './Home.module.scss';
import Banner from './Banner';
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
import dadosCategorias from './Produtos/categorias.json';
export default function Home() {


    const { setPage, busca } = useContext(HeaderContext);
    const [lista, setLista] = useState([]);
   
    useEffect(() => {
        setPage(true);
    });

    function testaBusca(name) {
        const regex = new RegExp(busca, 'i');
        return regex.test(name);
    }

    useEffect(() => {
        
        
        let listaInicial = dadosCategorias.categorias.map(categoria => dadosProdutos.produtos.filter(produto => produto.categoria === categoria && testaBusca(produto.nome)));
        
        setLista(listaInicial);

    }, [busca]);

    return (
        <main className={styles.home}>
            <Banner />
            {lista.map((produtos, index) => produtos.length > 0 && <Produtos key={index}  categoria={dadosCategorias.categorias[index]} produtos={produtos} />)}
        </main>
    );
}