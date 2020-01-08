import {
  Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef, Renderer2
} from '@angular/core';

import { AdminsTableComponent } from './admins-table/admins-table.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  selectedAdmins: Array<any>;
  addWindowOpened: boolean;
  @ViewChild(AdminsTableComponent) table: AdminsTableComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.selectedAdmins = [];
    this.addWindowOpened = false;
  }

  ngOnInit() {
  }

  toggleDropdown(event: any){
    const hasClass = event.target.parentElement.classList.contains('active');

    if(hasClass) {
      this.renderer.removeClass(event.target.parentElement, 'active');
    } else {
      this.renderer.addClass(event.target.parentElement, 'active');
    }
  }

  updateSelectedAdmins(admins: Array<any>){
    this.selectedAdmins = admins;
  }

  closeAddWindow(){
    this.addWindowOpened = false;
    this.table.getAdmins()
  }

}
