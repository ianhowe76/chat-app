import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Chat App</h1>

        <p className={styles.description}>Something is comming here</p>
      </main>

      <footer className={styles.footer}>Chat App footer</footer>
    </div>
  );
};

export default Home;
