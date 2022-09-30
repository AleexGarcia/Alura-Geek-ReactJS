import styles from './Dashboard.module.scss';
import Button from '../../components/Button';
import dados from '../../Data/produtos.json';
import Produto from '../../components/Produto';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';

export default function Dashboard() {


    const { setPage } = useContext(HeaderContext);
    useEffect(()=>{
        setPage(false);
    });


    let navigate = useNavigate();
    const paginaAddProduto = () => {
        navigate('adicionar');
    };

    return (
        <main>
            <section className={styles.dashboard}>
                <h2 className={styles.dashboard__titulo}>Todos os produtos</h2>
                <Button
                    funcao={paginaAddProduto}
                    color={'primario'} >Adicionar produto</Button>
                <div className={styles.dashboard__produtos}>
                    {dados.map((produto, index) => (
                        <Produto
                            key={index}
                            imagem={produto.imagem}
                            nome={produto.nome}
                            preco={produto.preco}
                            id={produto.id}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}