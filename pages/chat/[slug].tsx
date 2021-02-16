import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChatRoom } from "../../app/containers/chat-room";
import styles from "../../styles/Home.module.scss";

const Chat: React.FC = () => {
  const { slug: channelName } = useRouter().query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Chat: {channelName}</h1>

        <ChatRoom channelName={channelName as string} />

        <Link href="/">Home</Link>
      </main>

      <footer className={styles.footer}>Chat App footer</footer>
    </div>
  );
};

export default Chat;
