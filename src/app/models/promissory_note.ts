import { Loan } from "./loan";
import { Guarantee } from "./guarantee";

interface ClientInterface {
  id: string;
  file: string;
  code: string;
  loan: Loan;
  guarantee: Guarantee;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Client implements ClientInterface {
  id: string = '';
  file: string = '';
  code: string = '';
  loan: Loan = new Loan();
  guarantee: Guarantee = new Guarantee();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
