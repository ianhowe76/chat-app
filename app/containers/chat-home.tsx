import React from "react";
import Link from "next/link";
import { UserContext } from "../context/user-context";
import { UserBox } from "../components/user-box/user-box";

const channels = ["my-channel"];

export const ChatHome: React.FC = () => {
  const { username, setUsername } = React.useContext(UserContext);
  const showChat = Boolean(channels.length > 0 && username);

  return (
    <div>
      <h2>Chat home</h2>
      <UserBox username={username} setUsername={setUsername} />
      <h3>Channels</h3>
      {channels.length === 0 && <div>No Channels yet</div>}
      {showChat && (
        <ul>
          {channels.map((channelName) => (
            <li key={channelName}>
              <Link href={`/chat/${channelName}`}>{channelName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
