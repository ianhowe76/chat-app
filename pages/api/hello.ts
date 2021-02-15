import { NextApiHandler } from "next";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello: NextApiHandler = (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default hello;
