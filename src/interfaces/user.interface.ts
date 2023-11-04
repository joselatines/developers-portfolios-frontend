export interface User {
  id: string;
  username: string;
  email: string;
  github: string | null;
  profilePic: string | null;
  provider: string | null;
}