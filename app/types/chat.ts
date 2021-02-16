export interface IChatItem {
  timestamp: string;
  username: string;
  message: string;
}

export interface IChannelListResponse {
  channels: string[];
}

export interface IChannelHistoryResponse {
  history: IChatItem[];
}
