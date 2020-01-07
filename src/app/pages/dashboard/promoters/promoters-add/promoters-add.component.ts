import {
  Component, OnInit,
  Output, EventEmitter,
  Renderer2
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PromotersService } from '../promoters.service';


@Component({
  selector: 'app-promoters-add',
  templateUrl: './promoters-add.component.html',
  styleUrls: ['./promoters-add.component.scss']
})
export class PromotersAddComponent implements OnInit {

  selectedRegisterType: number;
  promoterForm: FormGroup;
  @Output() closeWindow;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _promoters: PromotersService
  ) {
    this.selectedRegisterType = 1;
    this.promoterForm = this.formBuilder.group({
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
      this._promoters.createPromoter(this.promoterForm.value).subscribe(response => {
        this.promoterForm.reset();
        this.closeWindow.emit(true);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
