import {
  Component, OnInit,
  ViewChild,
  Output, EventEmitter
} from '@angular/core';

import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  employees: Array<any>;
  @ViewChild('globalCheck') globalCheck;
  @Output() selectedEmployees;

  constructor(
    private _employees: EmployeesService
  ) {
    this.employees = [];
    this.selectedEmployees = new EventEmitter<Array<any>>();
    this.getEmployees();
  }

  ngOnInit() {
  }

  getEmployees(){
    this._employees.getEmployees().subscribe(response => {
      this.employees = response["employees"]
      console.log(this.employees)
    })
  }

  updateSelectedEmployees(){
    let employees = this.employees.filter(
      (employee: any) => employee.checked == true
    );
    this.selectedEmployees.emit(employees);
  }

  checkAll(){
    for (let employee of this.employees)
      employee.checked = this.globalCheck.nativeElement.checked

    this.updateSelectedEmployees()
  }

  checkElement(element: any){
    let employee = this.employees.find(
      e => e.id == element.target.id
    )

    employee.checked = !employee.checked
    this.updateSelectedEmployees()
  }

}
