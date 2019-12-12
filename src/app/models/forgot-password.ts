interface ForgotPasswordInterface {
  email: string;
}

export class ForgotPassword implements ForgotPasswordInterface {
  email: string = '';
}
