import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-put-email',
  templateUrl: './put-email.component.html',
  styleUrls: ['./put-email.component.scss']
})
export class PutEmailComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['login']);
  }

  sendEmail(){
    this.router.navigate([
      'login',
      'forgot-password',
      'link-sent'
    ]);
  }

}
