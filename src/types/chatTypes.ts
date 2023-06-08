import { FetchingStatus } from "types/common";
import { ProfileType } from "types/profileTypes";

export type DiscussionType = {
  authorId: string;
  messageId: string;
  message: string | null;
  time: string;
}

export type ChatItemType = {
  chatInfo: ProfileType;
  discussion: DiscussionType[];
};

export type ChatListType = {
  chatList: ChatItemType[];
  fetchingStatus: FetchingStatus;
  error: {
    text?: string;
    code?: string;
  };
};

export type NewMessageType = {
  chatBoxId: string;
  authorId: string;
  message: string;
};

// export
