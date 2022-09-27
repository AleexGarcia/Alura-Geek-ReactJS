import Contato from '../../components/Contato';
import Produtos from './Produtos';
import dadosProdutos from '../../dados/produtos.json';
export default function Home() {
        console.log(dadosProdutos)
    return (
        <>

            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'StarWars')}
            />
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Consoles')}
            />
            <Produtos
                produtos={dadosProdutos.filter(produto => produto.categoria === 'Diversos')}
            />

            <Contato />
        </>
    );
}