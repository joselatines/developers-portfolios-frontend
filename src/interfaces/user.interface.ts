export interface User {
  id: string;
  githubUsername: string;
  email: string;
  github: string;
  profilePic: string;
  provider: string | null;
}