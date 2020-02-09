import { Component, OnInit, Renderer2 } from '@angular/core';
import { ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { UsersService } from './users.service';
import { UsersTableComponent } from './users-table/users-table.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedTab: number;
  addWindowOpened: boolean;
  selectedUsers: Array<any>;
  @ViewChild(UsersTableComponent) table: UsersTableComponent;

  constructor(
    private _users: UsersService,
    private renderer: Renderer2
  ) {
    this.selectedTab = 1;
    this.selectedUsers = [];
    this.addWindowOpened = false;
  }

  ngOnInit() {
  }

  changeTab(event: any){
    const parent = event.target.parentElement;
    for(let section of parent.children){
      this.renderer.removeClass(section, 'active');
    }

    switch(event.target.id){
      case "admin":
        this.selectedTab = 1
        break;
      case "promoter":
        this.selectedTab = 2
        break;
      case "accredited":
        this.selectedTab = 3
        break;
    }
    this.table.getUsers(this.selectedTab)
    this.renderer.addClass(event.target, 'active');
  }

  toggleDropdown(event: any){
    const hasClass = event.target.parentElement.classList.contains('active');

    if(hasClass) {
      this.renderer.removeClass(event.target.parentElement, 'active');
    } else {
      this.renderer.addClass(event.target.parentElement, 'active');
    }
  }

  updateSelectedUsers(users: Array<any>){
    this.selectedUsers = users;
  }

  closeAddWindow(){
    this.addWindowOpened = false;
    this.table.getUsers()
  }

}
