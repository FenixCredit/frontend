import { User } from "./user";
import { Admin } from "./admin";
import { Role } from "./role";

interface EmployeeInterface {
  id: string;
  email: string;
  contract: string;
  picture: string;
  status: number;
  user: User;
  admin: Admin;
  role: Role;
  created_at: string;
  updated_at: string;
  checked: boolean;
}

export class Employee implements EmployeeInterface {
  id: string = '';
  email: string = '';
  contract: string = '';
  picture: string = '';
  status: number = 1;
  user: User = new User();
  admin: Admin = new Admin();
  role: Role = new Role();
  created_at: string = '';
  updated_at: string = '';
  checked: boolean = false;
}
