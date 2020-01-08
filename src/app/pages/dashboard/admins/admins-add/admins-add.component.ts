import {
  Component, OnInit,
  Output, EventEmitter,
  Renderer2
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminsService } from '../admins.service';


@Component({
  selector: 'app-admins-add',
  templateUrl: './admins-add.component.html',
  styleUrls: ['./admins-add.component.scss']
})
export class AdminsAddComponent implements OnInit {

  selectedRegisterType: number;
  adminForm: FormGroup;
  @Output() closeWindow;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _admins: AdminsService
  ) {
    this.selectedRegisterType = 1;
    this.adminForm = this.formBuilder.group({
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
      photo: [null]
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
      this._admins.createAdmin(this.adminForm.value).subscribe(response => {
        this.adminForm.reset();
        this.closeWindow.emit(true);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
