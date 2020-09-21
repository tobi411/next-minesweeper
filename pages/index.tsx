import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { useSelector } from "react-redux";
import Board from "../components/board";

export default function Home() {

  const gameState = useSelector((state) => state.gameState)

  return (
    <div className={styles.container}>
      {/* <Head>
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

        <Board />

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
      </footer> */}
      <Container>
        <Head>
          <title>Minesweeper</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className={styles.title}>
              Minesweeper
          </h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>
              Developed by {gameState.name}
            </p>
          </Row>
          <Row>
            <Board />
          </Row>
        </Container>
      </Container>
    </div>
  )
}
