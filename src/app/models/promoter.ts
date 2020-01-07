import { User } from "./user";
import { Employee } from "./employee";

interface PromoterInterface {
  id: string;
  aka: string;
  contract: string;
  user: User;
  employee: Employee;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Promoter implements PromoterInterface {
  id: string = '';
  aka: string = '';
  contract: string = '';
  user: User = new User();
  employee: Employee = new Employee();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
