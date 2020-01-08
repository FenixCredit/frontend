import {
  Component, OnInit,
  ViewChild,
  Output, EventEmitter
} from '@angular/core';

import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  styleUrls: ['./admins-table.component.scss']
})
export class AdminsTableComponent implements OnInit {

  admins: Array<any>;
  @ViewChild('globalCheck') globalCheck;
  @Output() selectedAdmins;

  constructor(
    private _admins: AdminsService
  ) {
    this.admins = [];
    this.selectedAdmins = new EventEmitter<Array<any>>();
    this.getAdmins();
  }

  ngOnInit() {
  }

  getAdmins(){
    this._admins.getAdmins().subscribe(response => {
      this.admins = response["admins"]
      console.log(this.admins)
    })
  }

  updateSelectedAdmins(){
    let admins = this.admins.filter(
      (admin: any) => admin.checked == true
    );
    this.selectedAdmins.emit(admins);
  }

  checkAll(){
    for (let admin of this.admins)
      admin.checked = this.globalCheck.nativeElement.checked

    this.updateSelectedAdmins()
  }

  checkElement(element: any){
    let admin = this.admins.find(
      a => a.id == element.target.id
    )

    admin.checked = !admin.checked
    this.updateSelectedAdmins()
  }

}
