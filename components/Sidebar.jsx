import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src=" https://images.unsplash.com/photo-1511376777868-611b54f68947?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                />
            <div className={styles.profile}>
                <img className={styles.avatar} src="http://github.com/ThomazRussian.png"/>
                <strong>Thomaz Russian</strong>
                <span> Web Developer</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size= {32} 
                    />
                Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}