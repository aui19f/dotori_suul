import { UserRole } from "@/components/enums/UserRole.enum";

export interface ICreateAccountForm {
  email: string;
  password: string;
  password2: string;
  extraError?: string;
}

export interface ILoginForm {
  email: string;
  password: string;

  extraError?: string;
}

export interface IUserForm {
  email: string;
  nickname: string;
  like: {
    homebrew: string[];
    brewery: string[];
    suul: string[];
  };
  bookmark: {
    homebrew: string[];
    brewery: string[];
    suul: string[];
    festival: string[];
  };
  createdAt: string;
  updatedAt: string;
  role: UserRole;
}

export interface ILoginUser {
  uid: string;
  email: string;
  nickname: string;
  role: UserRole;
}
