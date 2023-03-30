export interface IIssue {
  issueID: string;
  title: string;
  userId: number;
  issueDetail: string;
  status: string;
  reportDate: Date;
  replyMessage?: number;
}

export interface IMessage {
  userMessage?: {
    postedTime: Date;
    message: string;
  };
  adminReply?: {
    postedTime?: Date;
    message?: string;
  };
}