import {
  Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef, Renderer2
} from '@angular/core';

import { CreditsTableComponent } from './credits-table/credits-table.component';
import { CreditsDetailComponent } from './credits-detail/credits-detail.component';
import { Loan } from '@models/loan'

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  selectedCredits: Array<any>;
  loanToShow: Loan;
  addWindowOpened: boolean;
  statusModalOpened: boolean;
  productsModalOpened: boolean;
  detailWindowOpened: boolean;
  @ViewChild(CreditsTableComponent) table: CreditsTableComponent;
  @ViewChild(CreditsDetailComponent) detail: CreditsDetailComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.selectedCredits = [];
    this.loanToShow = new Loan();
    this.addWindowOpened = false;
    this.statusModalOpened = false;
    this.productsModalOpened = false;
    this.detailWindowOpened = false;
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

  updateSelectedCredits(admins: Array<any>){
    this.selectedCredits = admins;
  }

  closeAddWindow(){
    this.addWindowOpened = false;
    this.table.getCredits();
  }

  openStatusModal(dropdown){
    this.statusModalOpened = true;
    this.renderer.removeClass(dropdown, 'active');
  }

  closeStatusModal(){
    this.statusModalOpened = false;
    this.selectedCredits = [];
    this.table.getCredits();
  }

  openProductsModal(dropdown){
    this.productsModalOpened = true;
    this.renderer.removeClass(dropdown, 'active');
  }

  closeProductsModal(){
    this.productsModalOpened = false;
    this.selectedCredits = [];
  }

  openDetailWindow(loan: Loan){
    this.loanToShow = loan;
    this.detailWindowOpened = true;
    this.detail.getLoan(loan)
  }

  closeDetailWindow(id: string){
    this.detailWindowOpened = false;
    this.table.getCredits()
  }

}
