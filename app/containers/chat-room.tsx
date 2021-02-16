import React from "react";
import { useChannel, useEvent } from "@harelpls/use-pusher";
import axios from "axios";
import { useRouter } from "next/router";
import { ChatDisplay } from "../components/chat-display/chat-display";
import { ChatBox } from "../components/chat-box/chat-box";
import { Container } from "../components/container/container";
import { UserContext } from "../context/user-context";
import { IChannelHistoryResponse, IChatItem } from "../types/chat";

interface IChatRoomProps {
  channelName: string;
}

const getBaseUrl = (): string =>
  `${window.location.protocol}//${window.location.host}/api/chat`;

export const ChatRoom: React.FC<IChatRoomProps> = ({ channelName }) => {
  const router = useRouter();
  const { username } = React.useContext(UserContext);
  const [chatItems, setChatItems] = React.useState<IChatItem[]>([]);
  const channel = useChannel(channelName);
  useEvent(channel, "new-message", (data: IChatItem) => {
    setChatItems([data, ...chatItems]);
  });

  const newChatMessage = (message: string) => {
    const url = getBaseUrl();
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

  React.useEffect(() => {
    if (!username) {
      router.push("/");

      return;
    }

    // Get chat history
    const url = `${getBaseUrl()}?channel=${channelName}`;
    axios
      .get(url)
      .then(({ data }: { data: IChannelHistoryResponse }) => {
        setChatItems(data.history);
      })
      .catch((err) => {
        console.log("get history error", err); // eslint-disable-line no-console
      });
  }, [username, channelName]);

  return (
    <Container full>
      <p>Chat here: {channelName}</p>
      <ChatDisplay items={chatItems} />
      <ChatBox handleSubmit={newChatMessage} />
    </Container>
  );
};
