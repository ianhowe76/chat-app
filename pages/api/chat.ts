import { NextApiHandler } from "next";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

const newMessageHandler: NextApiHandler = (req, res) => {
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
  pusher.trigger(channel, "new-message", msgData);

  res.status(200).json(msgData);

  return;
};

const chatHandler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    newMessageHandler(req, res);
  } else {
    res.status(200).json({ data: "Get Chat" });
  }
};

export default chatHandler;
