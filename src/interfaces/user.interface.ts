export interface User {
  id: string;
  githubUsername: string;
  email: string;
  github: string | null;
  profilePic: string | null;
  provider: string | null;
}