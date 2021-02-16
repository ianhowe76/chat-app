This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Summary

This project aims to show a real-time chat app. I have chosen [Pusher](https://pusher.com/) as the platform to enable the real-time chat.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pusher Setup

Pusher requires the following environment variables to run.

These can be obtained from pusher by creating a new App under `Channels`

- `PUSHER_APP_ID`: Pusher `app_id` value
- `NEXT_PUBLIC_PUSHER_KEY`: Pusher `key` value
- `PUSHER_SECRET`: Pusher `secret` value
- `NEXT_PUBLIC_PUSHER_CLUSTER`: Pusher `cluster` value

## API Routes

The main API route is at `/api/chat`

### POST `/api/chat`

This API gets the new message in the body and then
1. Sends message on Pusher channel
2. Saves message in data store

The body has format:

```
{
    "channel": "my-channel",
    "username": "username",
    "message": "my message"
}

```

### GET `/api/chat`

This API returns the list of available channels

The response is in the format

```
{
    "channels": [ "channel1", "channel2"]
}
```

### GET `/api/chat?channel=channel-name`

This API returns the history of the requested `channel`;

Each item in the response has:
- timestamp: Time the the message was sent
- username: User who sent the message
- message: Message content

Example response

```
{
    "history": [
        {
            "timestamp": "2021-02-16T04:20:09.751Z",
            "username": "user",
            "message": "my message"
        }
    ]
}
```

## Deployment

The app is deployed to the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

The app URL is: https://chat-app-three-lake.vercel.app/
