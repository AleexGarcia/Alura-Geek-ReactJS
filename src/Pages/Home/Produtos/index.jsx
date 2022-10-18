import styles from './Produtos.module.scss';
import classNames from 'classnames';
import Produto from '../../../components/Produto';

// eslint-disable-next-line react/prop-types
export default function Produtos({ produtos, categoria }) {
   
    return (
        <section id={categoria === 'Consoles' && categoria} className={classNames(styles.produtos, 'container')}>
            <h2 className={styles.produtos__titulo}>{categoria}</h2>
            <span
                onClick={(e) => {
                    let figures = e.target.nextSibling.childNodes;
                    figures.forEach((figure, index) => {
                        if (index > 5) {
                            figure.classList.toggle(`${styles.verTudo}`);
                        }
                    });
                }}
                className={styles.produtos__verTudo}
            >Ver tudo
            </span>
            <div className={styles.produtos__cards}>
                {produtos.map((produto, index) => (
                    <Produto
                        key={index}
                        imagem={produto.imagem}
                        preco={produto.preco}
                        nome={produto.nome}
                        id={produto.id}

                    >Ver produto</Produto>
                ))}

            </div>

        </section>
    );
}



