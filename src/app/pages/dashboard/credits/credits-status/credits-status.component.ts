import {
  Component, OnInit,
  Input, Output, EventEmitter,
  ViewChild
} from '@angular/core';

import { CreditsService } from '../credits.service';

@Component({
  selector: 'app-credits-status',
  templateUrl: './credits-status.component.html',
  styleUrls: ['./credits-status.component.scss']
})
export class CreditsStatusComponent implements OnInit {

  @Output() closeModal;
  @Input() selectedCredits: Array<any>;

  constructor(
    private _credits: CreditsService
  ) {
    this.closeModal = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  changeStatus(select: any){
    let credits: Array<{
      id: string,
      status: number
    }> = [];

    this.selectedCredits.forEach((credit) => {
      credits.push({
        id: credit.id,
        status: select.value
      });
    })

    this._credits.changeStatus(credits).subscribe(response => {
      this.closeModal.emit(true)
    }, error => {
      console.log(error);
    });
  }

}
