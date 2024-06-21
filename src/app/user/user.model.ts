export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserResponse {
  email: string;
  username: string;
}
export interface ILoginResponse {
  user: IUserResponse;
  accessToken: string;
}
