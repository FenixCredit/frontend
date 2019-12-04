import { Component, OnInit, Renderer2 } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  selectedRegisterType: number;
  selectedUserType: number;
  adminForm: FormGroup;
  @Output() closeWindow;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {
    this.selectedRegisterType = 1;
    this.selectedUserType = 1;
    this.adminForm = this.formBuilder.group({
      type: [1],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null],
      birthday: [null],
      password: [Math.random().toString(36).substring(7), [Validators.required]]
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

}
