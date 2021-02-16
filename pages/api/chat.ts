import { NextApiHandler } from "next";
import Pusher from "pusher";
import { IChatItem } from "../../app/types/chat";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

const chatData: { [channelName: string]: IChatItem[] } = {};

const addChatItem = (channel: string, item: IChatItem): void => {
  const chat = chatData[channel] || [];

  chatData[channel] = [item, ...chat];
};

const getChat = (channel: string): IChatItem[] => chatData[channel] || [];

const getChannelList = (): string[] => Object.keys(chatData);

const newMessageHandler: NextApiHandler = async (req, res) => {
  const { channel, username, message } = req.body;

  if (!channel || !username || !message) {
    res.status(422).json({ message: "Missing channel or message" });

    return;
  }

  const msgData = {
    timestamp: new Date().toISOString(),
    username,
    message,
  };

  await pusher.trigger(channel, "new-message", msgData);

  // Add to history
  addChatItem(channel, msgData);

  res.status(200).json({ ...msgData, channel });

  return;
};

const getHistoryHandler: NextApiHandler = (req, res) => {
  const { channel } = req.query;

  if (channel) {
    const chatData = getChat(channel as string);
    res.status(200).json({ history: chatData });

    return;
  }

  // Return all channels
  res.status(200).json({ channels: getChannelList() });
};

const chatHandler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    await newMessageHandler(req, res);
  } else {
    getHistoryHandler(req, res);
  }
};

export default chatHandler;
