import React, { useState } from "react";

import styles from "./chat-box.module.scss";

interface IChatBoxProps {
  handleSubmit: (msg: string) => void;
}
export const ChatBox: React.FC<IChatBoxProps> = ({ handleSubmit }) => {
  const [msg, setMsg] = useState<string>("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setMsg(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit(msg);
    setMsg("");
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input type="text" value={msg} onChange={onChange} />
      <button type="submit">Send</button>
    </form>
  );
};
