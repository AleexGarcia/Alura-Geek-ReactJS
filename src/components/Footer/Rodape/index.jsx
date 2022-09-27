import styles from './Rodape.module.scss';

export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <p>Desenvolvido por <a href='https://github.com/AleexGarcia'>Alexandre Garcia</a><br/>2022</p>
        </div>
    );
}
