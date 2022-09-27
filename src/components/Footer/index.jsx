import Contato from './Contato';
import styles from './Footer.module.scss';
import Rodape from './Rodape';
export default function Footer(){
    return(
        <footer>
            <Contato/>
            <Rodape/>
        </footer>
    );  
}