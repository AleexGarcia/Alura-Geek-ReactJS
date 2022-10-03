import styles from './ProdutoPage.module.scss';
import dados from '../../Data/produtos.json';
import Produto from '../../components/Produto';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';
export default function ProdutoPage() {
   
    const { setPage } = useContext(HeaderContext);
    useEffect(()=>{
        setPage(false);
    });


    const {id}= useParams();
   
    let produto = dados.produtos[dados.produtos.findIndex(produto =>produto.id === id)];
    let similares = dados.produtos.filter(prod => prod.categoria === produto.categoria);
    return (
        <main>
            <figure className={styles.produto}>
                <img className={styles.produto__imagem} src={produto.imagem} alt="" />
                <figcaption>
                    <h2>{produto.nome}</h2>
                    <span>R$ {produto.preco}</span>
                    <p>{produto.descricao}</p>
                </figcaption>
            </figure>
            <div className={styles.similares}>
                <h2 className={styles.similares__titulo}>Produtos Similares</h2>
                <div className={styles.similares__produtos}>
                    {similares.map((produto, index) => (
                        <Produto
                            key={index}
                            imagem={produto.imagem}
                            nome={produto.nome}
                            preco={produto.preco}
                            id={produto.id}
                        >Ver produto</Produto>
                    ))}
                </div>
            </div>
        </main>
    );
}