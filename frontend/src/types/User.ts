import { Religion } from './Religion';
export interface User {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  religionId: number;
  religion: Religion;
}
