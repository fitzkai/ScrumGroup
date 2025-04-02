import { User } from './User';
export interface DiscussionItem {
  discussionId: number;
  userId: number;
  user: User;
  timePosted: string;
  response: string;
  username: string;
}
