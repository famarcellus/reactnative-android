export type MessagePreview = {
  contactId: number;
  name: string;
  profileImgUrl: string;
  latestMessagePreview: string;
  dateSent: string;
  hasBeenRead: boolean;
};

export type Recipient = {
  contactId: number;
  name: string;
  profileImgUrl: string;
  messageHistory: Message[];
};

export type Message = {
  senderId: number;
  senderName: string;
  senderProfileImgUrl: string;
  content: string;
  dateSent: string;
};
