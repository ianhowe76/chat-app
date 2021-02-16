import React from "react";

import styles from "./user-box.module.scss";
interface IUserBoxProps {
  username: string;
  setUsername: (string) => void;
}

export const UserBox: React.FC<IUserBoxProps> = ({ username, setUsername }) => {
  const [newName, setNewName] = React.useState<string>(username);

  if (username) {
    // Display with option to change
    return (
      <div className={styles.container}>
        Chatting as <strong>{username}</strong>
      </div>
    );
  }

  const handleNewName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsername(newName);
  };

  // Set username
  return (
    <form className={styles.container} onSubmit={handleNewName}>
      <input
        type="text"
        id="name"
        value={newName}
        onChange={(e) => {
          setNewName(e.currentTarget.value);
        }}
      />
    </form>
  );
};
