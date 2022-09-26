import Button from '../../../components/Button';
import styles from './Banner.module.scss';

export default function Banner() {

    return (
        <section className={styles.banner}>
            <div className='container'>
                <h1 className={styles.banner__titulo}>Dezembro Promocional</h1>
                <p className={styles.banner__paragrafo}>Produtos selecionados com 33% de desconto</p>
                <Button color={'primario'}>Ver Consoles</Button>
            </div>
        </section>
    );

}