import styles from './Produto.module.scss';
import { Link } from 'react-router-dom';

export default function Produto({ imagem, nome, preco, id, children }) {

    async function removeProduto(id) {
        return await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE'
        });
    }

    return (
        <figure className={styles.produto}>
            <img className={styles.produto__imagem} src={imagem} alt='imagem' />
            {children == undefined &&
                (<div className={styles.produto__controles}>
                    <i onClick={() => removeProduto(id)} className={styles.produto__delete}></i>
                    <Link to={`/dashboard/editar/${id}`} className={styles.produto__edit}></Link>
                </div>)
            }
            <figcaption>
                <span className={styles.produto__titulo} >{nome}</span>
                <span className={styles.produto__preco}>{(new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(preco))}</span>
                {children == undefined ? <span>#{id}</span> :
                    <Link
                        to={`/produto/${id}`}
                    >{children}</Link>
                }

            </figcaption>
        </figure>

    );
}