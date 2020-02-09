import {
  Component, OnInit,
  ViewChild,
  Output, EventEmitter
} from '@angular/core';

import { CreditsService } from '../credits.service';
import { Loan } from '@models/loan'

@Component({
  selector: 'app-credits-table',
  templateUrl: './credits-table.component.html',
  styleUrls: ['./credits-table.component.scss']
})
export class CreditsTableComponent implements OnInit {

  credits: Array<any>;
  @ViewChild('globalCheck') globalCheck;
  @Output() selectedCredits;
  @Output() showCredit;

  constructor(
    private _credits: CreditsService
  ) {
    this.credits = [];
    this.selectedCredits = new EventEmitter<Array<any>>();
    this.showCredit = new EventEmitter<Loan>();
    this.getCredits();
  }

  ngOnInit() {
  }

  getCredits(){
    this._credits.getCredits().subscribe(response => {
      this.credits = response["loans"]
      console.log(this.credits)
    })
  }

  updateSelectedCredits(){
    let credits = this.credits.filter(
      (credit: any) => credit.checked == true
    );
    this.selectedCredits.emit(credits);
  }

  checkAll(){
    for (let credit of this.credits)
      credit.checked = this.globalCheck.nativeElement.checked

    this.updateSelectedCredits()
  }

  checkElement(element: any){
    let credit = this.credits.find(
      a => a.id == element.target.id
    )

    credit.checked = !credit.checked
    this.updateSelectedCredits()
  }

  displayCredit(id: string){
    let credit = this.credits.find(credit => credit.id == id);

    this.showCredit.emit(credit);
  }
}
