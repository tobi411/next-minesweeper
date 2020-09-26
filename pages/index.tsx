import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useSelector } from "react-redux";
import Game from "../components/game";

export default function Home() {

  const gameState = useSelector((state) => state.gameState)
  
  return (
    <div className={styles.container}>
      <Container fluid>
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
            <p className={styles.subtitle}>
              Developed by {gameState.name}
            </p>
          </Row>
          <Row className="justify-content-md-center">
              <Game data={gameState}/>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
