import styles from './Header.module.scss';
import logo from '../../assets/Header/Logo.svg';
import Button from '../Button';
import classNames from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Header() {

   
    const [exibeBusca,setExibeBusca] = useState();

    let page = (useLocation().pathname === '/login' || useLocation().pathname === '/dashboard');

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


    return (
        <header className={classNames(styles.header, 'container')}>
            <img
                onClick={() => {
                    navigate('/');
                }}
                src={logo} alt='' className={styles.header__logo} />

            {!page && <Button
                funcao={LoginBotao}
                color={'secundario'}
            >Login
            </ Button>}
           
            <span
                onClick={setExibeBusca}
                className={classNames(styles.header__lupa, styles.botaoBusca)}
            >
            </span>

            {(minWidth || exibeBusca ? true : false) && (<div className={styles.header__inputBox}>
                <input type="search" placeholder='O que deseja encontrar?' />
                <label
                    className={styles.header__lupa}
                >
                </label>
            </div>)}
        </header>
    );
}