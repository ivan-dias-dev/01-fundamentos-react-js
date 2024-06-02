import { ThumbsUp, Trash, TrashSimple } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/105668055?v=4" alt="Ivan Dias" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ivan Dias</strong>
                            <time datetime="11 de Maio às 08:13">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>33</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}