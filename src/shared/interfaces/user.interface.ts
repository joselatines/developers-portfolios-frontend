export interface IUser {
  id: string;
  githubUsername: string;
  email: string;
  profilePic: string;
  provider: string | null;
}