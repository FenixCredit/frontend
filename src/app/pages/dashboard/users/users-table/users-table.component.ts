import { Component, OnInit } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  users: Array<any>;
  @ViewChild('globalCheck') globalCheck;
  @Output() selectedUsers;

  constructor(
    private _users: UsersService
  ) {
    this.selectedUsers = new EventEmitter<Array<any>>();
    this.getUsers(1);
  }

  ngOnInit() {
  }

  getUsers(role: number){
    switch(role){
      case 1:
        this.users = [
          {
            id: 1,
            first_name: "Gerardo",
            last_name: "Soriano",
            email: "gerardosoriano97@gmail.com",
            cellphone: "8282810966",
            city: "Monterrey",
            status: "active",
            checked: false
          }
        ];
        break;
      case 2:
        this.users = [
          {
            id: 2,
            first_name: "Pedro",
            last_name: "Ramirez",
            email: "p.ramirez@gmail.com",
            cellphone: "8112978944",
            city: "Monterrey",
            status: "inactive",
            checked: false
          }
        ];
        break;
      case 3:
        this.users = []
        break;
    }
  }

  updateSelectedUsers(){
    let users = this.users.filter(
      (user: any) => user.checked == true
    );
    this.selectedUsers.emit(users);
  }

  checkAll(){
    for (let user of this.users)
      user.checked = this.globalCheck.nativeElement.checked

    this.updateSelectedUsers()
  }

  checkElement(element: any){
    let user = this.users.find(
      u => u.id == element.target.id
    )

    user.checked = !user.checked
    this.updateSelectedUsers()
  }

}
