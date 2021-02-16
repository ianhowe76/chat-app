import React from "react";
import { useChannel, useEvent } from "@harelpls/use-pusher";

interface IChatItem {
  timestamp: string;
  username: string;
  message: string;
}

interface IChatRoomProps {
  channelName: string;
}

export const ChatRoom: React.FC<IChatRoomProps> = ({ channelName }) => {
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([]);
  const channel = useChannel(channelName);
  useEvent(channel, "new-message", (data: IChatItem) => {
    setChatItems([data, ...chatItems]);
  });

  return (
    <div>
      <p>Chat here: {channelName}</p>
      {chatItems.length === 0 && <div>Start chatting</div>}
      {chatItems.length > 0 && (
        <ul>
          {chatItems.map(({ username, message, timestamp }) => (
            <li key={timestamp}>
              <div>{username}: </div>
              <div>{message}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
