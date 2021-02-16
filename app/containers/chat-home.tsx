import React from "react";
import axios from "axios";
import { UserContext } from "../context/user-context";
import { UserBox } from "../components/user-box/user-box";
import { ChannelList } from "../components/channel-list/channel-list";
import { Container } from "../components/container/container";
import { IChannelListResponse } from "../types/chat";

export const ChatHome: React.FC = () => {
  const { username, setUsername } = React.useContext(UserContext);
  const [channels, setChannels] = React.useState([]);
  const showChat = Boolean(channels.length > 0 && username);

  React.useEffect(() => {
    if (username) {
      // Get list of available channels
      const url = `${window.location.protocol}//${window.location.host}/api/chat`;
      axios
        .get(url)
        .then(({ data }: { data: IChannelListResponse }) => {
          setChannels(data.channels);
        })
        .catch((err) => {
          console.log("can't get channel data", err); // eslint-disable-line no-console
        });
    }
  }, [username]);

  return (
    <Container full>
      <h2>Chat home</h2>
      <UserBox username={username} setUsername={setUsername} />
      {showChat && <ChannelList channels={channels} />}
    </Container>
  );
};
