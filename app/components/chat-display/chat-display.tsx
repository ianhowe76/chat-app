import React from "react";
import { IChatItem } from "../../types/chat";
import styles from "./chat-display.module.scss";

interface IChatDisplayProps {
  items: IChatItem[];
}

export const ChatDisplay: React.FC<IChatDisplayProps> = ({ items }) => {
  if (items.length === 0) {
    return <div className={styles.container}>Start chatting...</div>;
  }

  return (
    <ul className={styles.container}>
      {items.map(({ timestamp, username, message }) => (
        <li key={timestamp} className={styles.chatItem}>
          <div className={styles.username}>{username}</div>
          <div>{message}</div>
        </li>
      ))}
    </ul>
  );
};
