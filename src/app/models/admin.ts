import { User } from "./user";

interface AdminInterface {
  id: string;
  email: string;
  photo: string;
  user: User;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Admin implements AdminInterface {
  id: string = '';
  email: string = '';
  photo: string = '';
  user: User = new User();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
