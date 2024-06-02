import styles from "./Post.module.css"
import { Comment } from "./Comment"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/105668055?v=4" alt="Ivan Dias" />
                    <div className={styles.authorInfo}>
                        <strong>Ivan Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 maio às 08:13" dateTime="2024-05-11 08:13:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{"  "}<a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{"  "}
                    <a href="#">#nlw</a>{"  "}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Escreva um comentário...">
                </textarea>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.CommentList}>
                < Comment />
                < Comment />
                < Comment />
            </div>
        </article >
    )
}