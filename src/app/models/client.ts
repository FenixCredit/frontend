import { User } from "./user";
import { Promoter } from "./promoter";

interface ClientInterface {
  id: string;
  client_type: number;
  street: string;
  external_number: string;
  internal_number: string;
  colony: string;
  user: User;
  promoter: Promoter;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Client implements ClientInterface {
  id: string = '';
  client_type: number = 0;
  street: string = '';
  external_number: string = '';
  internal_number: string = '';
  colony: string = '';
  user: User = new User();
  promoter: Promoter = new Promoter();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
