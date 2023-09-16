import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/lcnunes09.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luciana Nunes</strong>
                        <span>Product Manager</span>
                    </div>
                </div>

                <time title="13 de Setembro às 23:30h" dateTime='2023-09-13'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <p><a href="#">Continuar lendo</a></p>
                <p>
                    <p><a href="#">#test</a></p>
                    <p><a href="#">#rocketseat</a></p>
                    <p><a href="#">#nlw</a></p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>                

                <textarea 
                    placeholder="Escreva seu comentário"
                />
                <footer>
                    <button type='submit'>Enviar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}