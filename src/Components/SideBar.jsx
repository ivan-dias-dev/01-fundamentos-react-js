import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/105668055?v=4" alt="Ivan Dias" />
                <strong>Ivan Dias</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}