import styles from './Produto.module.scss';


export default function Produto({imagem,nome,preco,id,children,administrativo}) {

    
    return (
        <figure className={styles.produto}>
            <img className={styles.produto__imagem} src={imagem} alt='imagem' />
            <figcaption>
                <span className={styles.produto__titulo} >{nome}</span>
                <span className={styles.produto__preco}>R$ {preco}</span>
                {administrativo ? <span>{id}</span> :
                    <a>{children}</a>
                }
                
            </figcaption>
        </figure>

    );
}