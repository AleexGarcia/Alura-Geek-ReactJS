import styles from './Dashboard.module.scss';
import Button from '../../components/Button';
import dados from '../../Data/produtos.json';
import Produto from '../../components/Produto';
export default function Dashboard() {
    return (
        <main>
            <section className={styles.dashboard}>
                <h2 className={styles.dashboard__titulo}>Todos os produtos</h2>
                <Button color={'primario'} >Adicionar produto</Button>
                <div className={styles.dashboard__produtos}>
                    {dados.map((produto,index) => (
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