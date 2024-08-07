// JSX = Javascript + XML
import { Header } from './components/Header';
import{ Post } from './components/Post';
import { Sidebar } from './components/Sidebar'
<<<<<<< HEAD
=======

>>>>>>> 7f0e10d36d712d881ecd35b64628d66ff7c01e6b
import styles from './App.module.css'
import './global.css'
export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Thomaz Russian"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id inventore ratione nam quam cumque nulla aspernatur voluptates odit, dolores in a eligendi, iusto ad, itaque nemo. Veritatis, mollitia voluptate."
            />
          <Post
            author = "Gabriel Buzzi"
            content = "Um novo post muito legal"
            />
          </main>
        </div>
    </div>
  )
}
