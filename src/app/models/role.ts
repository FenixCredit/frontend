interface RoleInterface {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export class Role implements RoleInterface {
  id: string = '';
  name: string = '';
  created_at: string = '';
  updated_at: string = '';
}
