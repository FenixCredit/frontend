import {
  Component, OnInit,
  ViewChild,
  Output, EventEmitter
} from '@angular/core';

import { PromotersService } from '../promoters.service';

@Component({
  selector: 'app-promoters-table',
  templateUrl: './promoters-table.component.html',
  styleUrls: ['./promoters-table.component.scss']
})
export class PromotersTableComponent implements OnInit {

  promoters: Array<any>;
  @ViewChild('globalCheck') globalCheck;
  @Output() selectedPromoters;

  constructor(
    private _promoters: PromotersService
  ) {
    this.promoters = [];
    this.selectedPromoters = new EventEmitter<Array<any>>();
    this.getPromoters();
  }

  ngOnInit() {
  }

  getPromoters(){
    this._promoters.getPromoters().subscribe(response => {
      this.promoters = response["promoters"]
      console.log(this.promoters)
    })
  }

  updateSelectedPromoters(){
    let promoters = this.promoters.filter(
      (promoter: any) => promoter.checked == true
    );
    this.selectedPromoters.emit(promoters);
  }

  checkAll(){
    for (let promoter of this.promoters)
      promoter.checked = this.globalCheck.nativeElement.checked

    this.updateSelectedPromoters()
  }

  checkElement(element: any){
    let promoter = this.promoters.find(
      p => p.id == element.target.id
    )

    promoter.checked = !promoter.checked
    this.updateSelectedPromoters()
  }

}
