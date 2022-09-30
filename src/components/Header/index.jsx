import styles from './Header.module.scss';
import logo from '../../assets/Header/Logo.svg';
import Button from '../Button';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderContext } from '../../Context/HeaderContext';

export default function Header() {


    const { page } = useContext(HeaderContext);

 

    const [exibeBusca, setExibeBusca] = useState();

    let largura = useWindowSize().width;

    let navigate = useNavigate();

    let minWidth = largura > 600;


    function useWindowSize() {

        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowSize;
    }



    function LoginBotao() {
        navigate('login');
    }
    function menuAdministradorBotao() {
        navigate('dashboard');
    }
    let login = false;

    return (
        <header className={classNames(styles.header, 'container')}>
            <img
                onClick={() => {
                    navigate('/');
                }}
                src={logo} alt='' className={styles.header__logo} />

            {page && (!login ? (<Button
                funcao={LoginBotao}
                color={'secundario'}
            >Login
            </ Button>) : (<Button
                funcao={menuAdministradorBotao}
                color={'secundario'}
            >Menu Administrador
            </ Button>))}

            <span
                onClick={() => {
                    exibeBusca ? setExibeBusca(false) : setExibeBusca(true);
                }}
                className={classNames(styles.header__lupa, styles.botaoBusca)}
            >
            </span>

            {(minWidth || exibeBusca) && (<div className={styles.header__inputBox}>
                <input type="search" placeholder='O que deseja encontrar?' />
                <label
                    className={styles.header__lupa}
                >
                </label>
            </div>)}
        </header>
    );
}