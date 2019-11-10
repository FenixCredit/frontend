import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-succesful',
  templateUrl: './reset-succesful.component.html',
  styleUrls: ['./reset-succesful.component.scss']
})
export class ResetSuccesfulComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['login']);
  }

}
