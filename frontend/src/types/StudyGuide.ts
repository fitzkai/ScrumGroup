import { Religion } from './Religion';

import { User } from './User';

export interface StudyGuide {
  guideId: number;
  religionId: number;
  religion: Religion; // Include the full Religion object
  UserId: number;
  User: User; // Include the full User object
  VideoSrc: string | null; // Handle nullable values
  Response1: string | null;
  Response2: string | null;
  Response3: string | null;
  Response4: string | null;
  Response5: string | null;
}
