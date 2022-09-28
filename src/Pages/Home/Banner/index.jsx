
import Button from '../../../components/Button';
import styles from './Banner.module.scss';

export default function Banner() {
    function botaoConsole(){
        window.location.href='#consoles';
    }
    return (
        <section className={styles.banner}>
            <div className='container'>
                <h1 className={styles.banner__titulo}>Dezembro Promocional</h1>
                <p className={styles.banner__paragrafo}>Produtos selecionados com 33% de desconto</p>
                <Button
                    funcao={botaoConsole}
                    color={'primario'}>Ver Consoles</Button>
            </div>
        </section>
    );

}