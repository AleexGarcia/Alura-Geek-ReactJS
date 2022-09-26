import styles from './Header.module.scss';
import logo from '../../assets/Header/Logo.svg';
import Button from '../Button';


export default function Header() {

    return (
        <header className={styles.header}>
            <img src={logo} alt='' className={styles.logo} />
            <Button position={'header'} color={'secundario'}>Login</Button>
            <i className={styles.header__lupa}></i>
        </header>
    );
}