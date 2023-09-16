import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/lcnunes09.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Nunes</strong>
                            <time title="13 de Setembro às 23:30h" dateTime='2023-09-13'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Clap <span>1</span>                          
                    </button>
                </footer>
            </div>
        </div>
    )
}