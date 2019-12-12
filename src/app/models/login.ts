interface LoginInterface {
  email: string;
  password: string;
  call_key: string;
  push_key: string;
  client_device: number;
}

export class Login implements LoginInterface {
  email: string = '';
  password: string = '';
  call_key: string = '';
  push_key: string = '';
  client_device: number = 0;
}
