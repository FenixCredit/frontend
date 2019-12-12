interface PasswordRecoverInterface {
  password: string;
  password_confirmation: string;
}

export class PasswordRecover implements PasswordRecoverInterface{
  password: string = '';
  password_confirmation: string = '';
}
