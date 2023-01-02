export interface IUsername {
  username: string;
}

export interface IUserPayload extends IUsername {
  userId: number;
}

export interface IUserLogin extends IUsername {
  password: string;
}

export interface INewUser extends IUserLogin {
  classe: string;
  level: number;
}

export interface IUserId extends INewUser {
  id: number;
}