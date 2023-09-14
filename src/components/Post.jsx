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
                <p><a href="#">#test</a></p>
            </div>
        </article>
    )
}