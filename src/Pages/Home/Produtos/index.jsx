import styles from './Produtos.module.scss';
import imagem from '../../../assets/Produtos/imagem1.png';
import classNames from 'classnames';
export default function Produtos() {
    const produtos = [
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        },
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        },
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        },
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        },
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        },
        {
            imagem: './src/assets/Produtos/imagem1.png',
            titulo: 'Produto XYZ',
            preco: '30,00'
        }


    ];
    return (
        <section className={classNames(styles.produtos, 'container') }>
            <h2 className={styles.produtos__titulo}>Star Wars</h2>
            <span className={styles.produtos__verTudo}>Ver tudo</span>
            <div className={styles.produtos__cards}>
                {produtos.map((produto,index) => (
                    <figure key={index}>
                        <img src={produto.imagem} alt='imagem' />
                        <figcaption>
                            <span>{produto.titulo}</span>
                            <span>R$ {produto.preco}</span>
                            <a>Ver produto</a>
                        </figcaption>
                    </figure>
                ))}

            </div>

        </section>
    );
}