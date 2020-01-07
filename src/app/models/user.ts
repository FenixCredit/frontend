interface UserInterface {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  gender: number;
  birthday: string;
  created_at: string;
  updated_at: string;
}

export class User implements UserInterface {
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  phone: string = '';
  gender: number = 0;
  birthday: string = '';
  created_at: string = '';
  updated_at: string = '';
}
