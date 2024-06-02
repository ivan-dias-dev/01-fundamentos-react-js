import { Post } from "./Components/Post"
import { Header } from "./Components/Header"
import { Sidebar } from "./Components/SideBar"

import styles from "./Components/App.module.css"
import "./global.css"

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



