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
    this.users = [];
    this.selectedUsers = new EventEmitter<Array<any>>();
    this.getUsers(1);
  }

  ngOnInit() {
  }

  getUsers(role: number){
    switch(role){
      case 1:
        this._users.getAdmins().subscribe(response => {
          this.users = response["admins"]
        })
        break;
      case 2:
        this._users.getEmployees().subscribe(response => {
          this.users = response["employees"]
        })
        break;
      case 3:
        this._users.getClients().subscribe(response => {
          this.users = response["clients"]
        })
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
