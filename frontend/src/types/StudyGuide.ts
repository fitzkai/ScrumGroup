export interface Religion {
  religionId: number;
  religionName: string;
  category: string;
  overview: string;
}

export interface user {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  religionId: number;
  religion: Religion;
}

export interface StudyGuide {
  religion: any;
  GuideId: number;
  ReligionId: number;
  Religion: Religion; // Include the full Religion object
  UserId: number;
  User: user; // Include the full User object
  VideoSrc: string | null; // Handle nullable values
  Response1: string | null;
  Response2: string | null;
  Response3: string | null;
  Response4: string | null;
  Response5: string | null;
}
