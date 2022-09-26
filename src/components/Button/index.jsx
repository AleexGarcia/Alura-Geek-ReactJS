import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button({ color, children }) {

    return (
        <button className={classNames(styles.button, styles[color])}>
            {children}
        </button>
    );
}