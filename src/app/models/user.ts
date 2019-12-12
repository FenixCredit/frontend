interface UserInterface {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export class User implements UserInterface {
  email: string = '';
  first_name: string = '';
  last_name: string = '';
  role: string = '';
}
