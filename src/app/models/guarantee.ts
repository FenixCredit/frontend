import { User } from "./user";

interface GuaranteeInterface {
  id: string;
  is_favourite: boolean;
  street: string;
  external_number: string;
  internal_number: string;
  colony: string;
  identification: string;
  address_proof: string;
  warning_letter: string;
  user: User;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Guarantee implements GuaranteeInterface {
  id: string = '';
  is_favourite: boolean = false;
  street: string = '';
  external_number: string = '';
  internal_number: string = '';
  colony: string = '';
  identification: string = '';
  address_proof: string = '';
  warning_letter: string = '';
  user: User = new User();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
