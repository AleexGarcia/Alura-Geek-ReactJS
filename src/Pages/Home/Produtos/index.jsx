import styles from './Produtos.module.scss';
import classNames from 'classnames';
import Produto from '../../../components/Produto';

export default function Produtos({produtos,id}) {

    return (
        <section id={id} className={classNames(styles.produtos, 'container')}>
            <h2 className={styles.produtos__titulo}>{produtos[0].categoria}</h2>
            <span className={styles.produtos__verTudo}>Ver tudo</span>
            <div className={styles.produtos__cards}>
                {produtos.map((produto, index) => (
                    <Produto
                        key={index}
                        imagem={produto.imagem}
                        preco={produto.preco}
                        nome={produto.nome}
                        id={produto.id}
                        administrativo={false}
                    >Ver produto</Produto>
                ))}
           
            </div>

        </section>
    );
}



