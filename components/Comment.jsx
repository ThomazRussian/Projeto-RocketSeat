import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment}) {

    function handleDeleteComment() {

        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}> 
            <Avatar hasBorder={false} src="https://github.com/ThomazRussian.png" />

            <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.AuthorAndTime}>
                        <strong>Thomaz Russian </strong>
                        <time title ="11 de Maio ás 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>24</span>
                </button>
            </footer>

            </div>
        </div>
    )
}