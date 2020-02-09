import { Client } from "./client";

interface LoanInterface {
  id: string;
  quantity: number;
  status: number;
  period: string;
  client: Client;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Loan implements LoanInterface {
  id: string = '';
  quantity: number = 0;
  status: number = 0;
  period: string = '';
  client: Client = new Client();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
