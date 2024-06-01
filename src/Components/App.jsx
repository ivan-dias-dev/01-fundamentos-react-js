import { Post } from "./Post"
import { Header } from "./Header"
import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./SideBar"
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ivan" content="lorem aadas" />
          <Post author="Ivan" content="lorem aadas" />
        </main>
      </div>
    </>
  )
}

export default App



