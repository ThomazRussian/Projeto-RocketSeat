import styles from './Header.module.css'

import ignitelogo from '../Assets/ignite-logo.svg';

console.log(ignitelogo)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="Logotipo do Ignite" />
        </header>
    );
}
