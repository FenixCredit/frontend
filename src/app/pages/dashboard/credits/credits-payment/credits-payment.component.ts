import {
  Component, OnInit,
  Input, Output, EventEmitter,
  ViewChild
} from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray,
  Validators
} from '@angular/forms';

import { CreditsService } from '../credits.service';

@Component({
  selector: 'app-credits-payment',
  templateUrl: './credits-payment.component.html',
  styleUrls: ['./credits-payment.component.scss']
})
export class CreditsPaymentComponent implements OnInit {

  @Output() closeModal;
  @Input() selectedCredit: any;
  paymentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _credits: CreditsService
  ) {
    this.closeModal = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.preparePaymentForm()
  }

  preparePaymentForm(){
    this.paymentForm = this.formBuilder.group({
      quantity: [0.0],
      status: ['executed_complete']
    });
  }

  addPayment(){
    this._credits.createPayment(this.selectedCredit.id, this.paymentForm.value).subscribe(response => {
      this.preparePaymentForm();
      this.closeModal.emit(true);
    }, (error) => {
      console.log(error);
    });
  }
}
