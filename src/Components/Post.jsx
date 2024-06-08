import { format, formatDistance, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"


import styles from "./Post.module.css"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(["Massa!"]) //lista de comentários

    const [newCommentText, setNewSetCommentText] = useState("")//sempre iniciar um estado com uma informação vazia ou o mesmo tipo que vamos armazenar

    function handleCreateNewComment() {

        event.preventDefault() //Para n dar reload

        //console.log(event.target.comment.value)//no caso comment é o name da text area
        const newCommentText = event.target.comment.value //captura o novo comentario

        setComments([...comments, newCommentText])// adiciona o comentário a lista de comentarios
        setNewSetCommentText("")//Ele "reseta" o setNewSetCommentText para o valor inicial == const [newCommentText, setNewSetCommentText] = useState("")
    }

    function handleNewCommentChange(e) {
        console.log(e)
        setNewSetCommentText(event.target.value)//seta o setNewSetCommentText para o valor da textArea
    }


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true, //faz com que adicione os há cerca ou há
    })
    // Maneira complicada, vamos usar a biblioteca date-fns
    // const publishedDateFormated = new Intl.DateTimeFormat('pt-br', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',

    // }).format(publishedAt)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="Ivan Dias" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#" >{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Escreva um comentário..."
                    name="comment"
                    value={newCommentText}//seta o valor 
                    onChange={handleNewCommentChange}>
                </textarea>
                <footer>
                    <button type="submit">Publicar!</button>
                </footer>
            </form>
            <div className={styles.CommentList}>
                {comments.map((comment) => {
                    return < Comment content={comment} key={comment} />
                })}

            </div>
        </article >
    )
}