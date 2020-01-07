import {
  Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef, Renderer2
} from '@angular/core';

import { PromotersTableComponent } from './promoters-table/promoters-table.component';


@Component({
  selector: 'app-promoters',
  templateUrl: './promoters.component.html',
  styleUrls: ['./promoters.component.scss']
})
export class PromotersComponent implements OnInit {

  selectedPromoters: Array<any>;
  addWindowOpened: boolean;
  @ViewChild(PromotersTableComponent) table: PromotersTableComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.selectedPromoters = [];
    this.addWindowOpened = false;
  }

  ngOnInit() {
  }

  toggleDropdown(event: any){
    const hasClass = event.target.parentElement.classList.contains('active');

    if(hasClass) {
      this.renderer.removeClass(event.target.parentElement, 'active');
    } else {
      this.renderer.addClass(event.target.parentElement, 'active');
    }
  }

  updateSelectedPromoters(promoters: Array<any>){
    this.selectedPromoters = promoters;
  }

  closeAddWindow(){
    this.addWindowOpened = false;
    this.table.getPromoters()
  }
}
