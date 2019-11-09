import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() displayedSection;

  constructor() {
    this.displayedSection = new EventEmitter<any>();
  }

  ngOnInit() {
    this.displayedSection.emit('login');
  }

}
