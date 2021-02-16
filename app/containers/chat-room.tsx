import React from "react";
import { useChannel, useEvent } from "@harelpls/use-pusher";
import { ChatDisplay } from "../components/chat-display/chat-display";
import { ChatBox } from "../components/chat-box/chat-box";
import { Container } from "../components/container/container";
import { IChatItem } from "../types/chat";

interface IChatRoomProps {
  channelName: string;
}

export const ChatRoom: React.FC<IChatRoomProps> = ({ channelName }) => {
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([]);
  const channel = useChannel(channelName);
  useEvent(channel, "new-message", (data: IChatItem) => {
    setChatItems([data, ...chatItems]);
  });

  const newChatMessage = (msg: string) => {
    console.log("sending message", msg);
  };

  return (
    <Container full>
      <p>Chat here: {channelName}</p>
      <ChatDisplay items={chatItems} />
      <ChatBox handleSubmit={newChatMessage} />
    </Container>
  );
};
