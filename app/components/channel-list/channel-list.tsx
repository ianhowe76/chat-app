import React from "react";
import Link from "next/link";

import styles from "./channel-list.module.scss";

interface IChannelListProps {
  channels: string[];
}

export const ChannelList: React.FC<IChannelListProps> = ({ channels }) => (
  <div className={styles.container}>
    <h3>Channel List</h3>
    {channels.length === 0 && <p>No Channels yet</p>}
    {channels.length > 0 && (
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
