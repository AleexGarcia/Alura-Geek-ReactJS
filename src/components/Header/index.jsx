import styles from './Header.module.scss';
import logo from '../../assets/Header/Logo.svg';
import Button from '../Button';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [exibeBusca, setExibeBusca] = useState(false);
    let largura  = window.screen.width;
   useEffect(()=>{
if(largura>600 && !exibeBusca){
setExibeBusca(true);
}
   },[largura])
    
    return (
        <header className={classNames(styles.header, 'container')}>
            <img src={logo} alt='' className={styles.header__logo} />
            <Button color={'secundario'}>Login</Button>


            <span
                onClick={() => {
                    !exibeBusca ? setExibeBusca(true) : setExibeBusca(false);
                }}
                className={classNames(styles.header__lupa, styles.botaoBusca)}
            >

            </span>

            {exibeBusca && (<div className={styles.header__inputBox}>
                <input type="search" placeholder='O que deseja encontrar?' />
                <label
                    className={styles.header__lupa}
                >
                </label>
            </div>)}
            
        </header>
    );
}