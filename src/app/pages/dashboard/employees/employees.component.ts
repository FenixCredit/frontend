import {
  Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef, Renderer2
} from '@angular/core';

import { EmployeesTableComponent } from './employees-table/employees-table.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  selectedEmployees: Array<any>;
  addWindowOpened: boolean;
  @ViewChild(EmployeesTableComponent) table: EmployeesTableComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.selectedEmployees = [];
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

  updateSelectedEmployees(employees: Array<any>){
    this.selectedEmployees = employees;
  }

  closeAddWindow(){
    this.addWindowOpened = false;
    this.table.getEmployees()
  }

}
