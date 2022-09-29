import styles from './Produto.module.scss';
import { Link } from 'react-router-dom';

export default function Produto({ imagem, nome, preco, id, children }) {


    return (
        <figure className={styles.produto}>
            <img className={styles.produto__imagem} src={imagem} alt='imagem' />
            {children == undefined &&
                (<div className={styles.produto__controles}>
                    <i className={styles.produto__delete}></i>
                    <i className={styles.produto__edit}></i>
                </div>)
            }
            <figcaption>
                <span className={styles.produto__titulo} >{nome}</span>
                <span className={styles.produto__preco}>R$ {preco}</span>
                {children == undefined ? <span>#{id}</span> :
                    <Link
                        to={`/produto/${id}`}
                    >{children}</Link>
                }

            </figcaption>
        </figure>

    );
}