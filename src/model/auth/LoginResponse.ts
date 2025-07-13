import {User} from "./User";

export interface LoginResponse {
  statusCode: number;
  message: string;
  status: number;
  user: User;
}
