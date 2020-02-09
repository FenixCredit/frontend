import {
  Component, OnInit,
  Output, EventEmitter,
  Renderer2
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  selectedRegisterType: number;
  selectedUserType: number;
  userForm: FormGroup;
  @Output() closeWindow;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _users: UsersService
  ) {
    this.selectedRegisterType = 1;
    this.selectedUserType = 1;
    this.userForm = this.formBuilder.group({
      type: [1],
      user: this.formBuilder.group({
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        phone: [null],
        gender: ["male"],
        birthday: [null]
      }),
      alias: [null],
      contract: [null],
      address: [null],
      comission: [7.0],
      promoter_id: ['40c192d6-a7f5-48c8-b57c-d55fa4c5d1c4']
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

  changeUserType(event: any){
    const parent = event.target.parentElement;

    for(let section of parent.children){
      this.renderer.removeClass(section, 'active');
    }

    switch(event.target.id){
      case "p_admin":
        this.selectedUserType = 1
        break;
      case "p_promoter":
        this.selectedUserType = 2
        break;
      case "p_accredited":
        this.selectedUserType = 3
        break;
    }
    this.renderer.addClass(event.target, 'active');
  }

  onSubmit(){
    if(this.selectedRegisterType == 1){
      this._users.createUser(this.userForm.value).subscribe(response => {
        this.userForm.reset();
        this.closeWindow.emit(true);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
