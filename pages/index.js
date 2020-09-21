import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector } from "react-redux";

export default function Home() {

  const gameState = useSelector((state) => state.gameState)

  return (
    <div className={styles.container}>
      <Head>
        <title>Minesweeper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Minesweeper
        </h1>

        <p className={styles.description}>
          Developed by {gameState.name}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
