import React from "react";
import Link from "next/link";

const channels = ["my-channel"];

export const ChatHome: React.FC = () => {
  return (
    <div>
      <h2>Chat home</h2>
      <h3>Channels</h3>
      {channels.length === 0 && <div>No Channels yet</div>}
      <ul>
        {channels.map((channelName) => (
          <li key={channelName}>
            <Link href={`/chat/${channelName}`}>{channelName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
