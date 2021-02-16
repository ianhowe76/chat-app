import React from "react";
import { useChannel, useEvent } from "@harelpls/use-pusher";
import axios from "axios";
import { ChatDisplay } from "../components/chat-display/chat-display";
import { ChatBox } from "../components/chat-box/chat-box";
import { Container } from "../components/container/container";
import { UserContext } from "../context/user-context";
import { IChatItem } from "../types/chat";

interface IChatRoomProps {
  channelName: string;
}

export const ChatRoom: React.FC<IChatRoomProps> = ({ channelName }) => {
  const { username } = React.useContext(UserContext);
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([]);
  const channel = useChannel(channelName);
  useEvent(channel, "new-message", (data: IChatItem) => {
    setChatItems([data, ...chatItems]);
  });

  const newChatMessage = (message: string) => {
    const url = `${window.location.protocol}//${window.location.host}/api/chat`;
    axios
      .post(url, {
        channel: channelName,
        message,
        username,
      })
      .catch((err) => {
        console.log("send message error", err); // eslint-disable-line no-console
      });
  };

  return (
    <Container full>
      <p>Chat here: {channelName}</p>
      <ChatDisplay items={chatItems} />
      <ChatBox handleSubmit={newChatMessage} />
    </Container>
  );
};
