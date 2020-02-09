import {
  Component, OnInit,
  Input, Output, EventEmitter,
  Renderer2
} from '@angular/core';

import { CreditsService } from '../credits.service';
import { Loan } from '@models/loan';

@Component({
  selector: 'app-credits-detail',
  templateUrl: './credits-detail.component.html',
  styleUrls: ['./credits-detail.component.scss']
})
export class CreditsDetailComponent implements OnInit {

  @Output() closeWindow;
  @Input() loanToShow: string;
  loan: Loan;

  constructor(
    private _credits: CreditsService
  ) {
    this.closeWindow = new EventEmitter<boolean>();
    this.loan = new Loan();
  }

  ngOnInit() {
  }

  getLoan(loan: Loan){
    this._credits.getCredit(loan.id).subscribe(data => {
      this.loan = data['loan']
      console.log(this.loan)
    }, (error) => {
      console.log(error);
    })
  }

}
