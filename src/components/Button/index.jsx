import classNames from "classnames";
import styles from "./Button.module.scss"
import styled from "styled-components";


export default function Button({ color, children, position }) {

    return (
        <button className={classNames(styles.button, styles[color], styles[position])}>
            {children}
        </button>
    );
}