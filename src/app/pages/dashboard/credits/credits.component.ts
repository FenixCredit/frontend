import {
  Component, OnInit,
  ViewChild, ViewChildren, QueryList,
  ElementRef, Renderer2
} from '@angular/core';

import { CreditsTableComponent } from './credits-table/credits-table.component';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  selectedCredits: Array<any>;
  addWindowOpened: boolean;
  statusModalOpened: boolean;
  productsModalOpened: boolean;
  @ViewChild(CreditsTableComponent) table: CreditsTableComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.selectedCredits = [];
    this.addWindowOpened = false;
    this.statusModalOpened = false;
    this.productsModalOpened = false;
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

}
