import {
  Component, OnInit,
  Output, EventEmitter,
  Renderer2
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.scss']
})
export class EmployeesAddComponent implements OnInit {

  selectedRegisterType: number;
  employeeForm: FormGroup;
  @Output() closeWindow;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _employees: EmployeesService
  ) {
    this.selectedRegisterType = 1;
    this.employeeForm = this.formBuilder.group({
      type: [1],
      user: this.formBuilder.group({
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        phone: [null],
        gender: ["male"],
        birthday: [null]
      }),
      email: [null, [Validators.required]],
      password: ['123'],
      contract: [null],
      picture: [null],
      salary: [1000.0],
      address: [null],
      role_id: ['33c5aed9-75cf-40f2-a123-ebd32b260bbf']
    });
    this.closeWindow = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  changeRegisterType(event: any){
    const parent = event.target.parentElement;

    for(let section of parent.children){
      this.renderer.removeClass(section, 'active');
    }

    switch(event.target.id){
      case "manual":
        this.selectedRegisterType = 1
        break;
      case "email":
        this.selectedRegisterType = 2
        break;
    }
    this.renderer.addClass(event.target, 'active');
  }

  onSubmit(){
    if(this.selectedRegisterType == 1){
      this._employees.createEmployee(this.employeeForm.value).subscribe(response => {
        this.employeeForm.reset();
        this.closeWindow.emit(true);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
