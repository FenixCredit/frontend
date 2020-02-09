import {
  Component, OnInit,
  Output, EventEmitter,
  Renderer2,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { CreditsService } from '../credits.service';
import { Client } from '@models/client';
import { Guarantee } from '@models/guarantee';


@Component({
  selector: 'app-credits-add',
  templateUrl: './credits-add.component.html',
  styleUrls: ['./credits-add.component.scss']
})
export class CreditsAddComponent implements OnInit {

  selectedRegisterType: number;
  creditForm: FormGroup;
  creditData: FormData;

  @Output() closeWindow;

  clients: Array<Client>;

  guarantees: Array<Guarantee>;

  identificationFile: File;
  identificationLoaded: boolean;
  addressProofFile: File;
  addressProofLoaded: boolean;
  warningLetterFile: File;
  warningLetterLoaded: boolean;
  fileFile: File;
  fileLoaded: boolean;

  @ViewChild('client') clientInput: any;
  @ViewChild('guarantee') guaranteeInput: any;
  @ViewChild('filePath') fileInput: any;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private _credits: CreditsService
  ) {
    this.closeWindow = new EventEmitter<boolean>();

    this.clients = [];

    this.selectedRegisterType = 1;

    this.prepareCreditForm();
  }

  prepareCreditForm(){
    this.creditForm = this.formBuilder.group({
      loan: this.formBuilder.group({
        client_id: [null],
        quantity: [5000.00],
        period: ['3 months']
      }),
      promissory_note: this.formBuilder.group({
        file: [],
        code: []
      }),
      guarantee: this.formBuilder.group({
        id: [],
        user: this.formBuilder.group({
          first_name: [],
          last_name: [],
          phone: [],
          gender: ['men'],
          birthday: []
        }),
        is_favourite: [false],
        street: [],
        external_number: [],
        internal_number: [],
        colony: [],
        identification: [],
        address_proof: [],
        warning_letter: []
      })
    });
    this.creditData = new FormData();
    this.identificationLoaded = false;
    this.addressProofLoaded = false;
    this.warningLetterLoaded = false;
    this.fileLoaded = false;
  }

  get productArray(): FormArray {
    return this.creditForm.get('products') as FormArray;
  }

  get productFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [],
      value: [],
      photo: [],
      loaded: [false]
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.creditData.append(
      'loan[quantity]',
      this.creditForm.get('loan').get('quantity').value
    );
    this.creditData.append(
      'loan[period]',
      this.creditForm.get('loan').get('period').value
    );
    this.creditData.append(
      'loan[client_id]',
      this.creditForm.get('loan').get('client_id').value
    );
    this.creditData.append(
      'loan[promissory_note][code]',
      this.creditForm.get('promissory_note').get('code').value
    );
    this.creditData.append(
      'loan[guarantee][id]',
      this.creditForm.get('guarantee').get('id').value
    );
    this.creditData.append(
      'loan[guarantee][is_favourite]',
      this.creditForm.get('guarantee').get('is_favourite').value
    );
    this.creditData.append(
      'loan[guarantee][street]',
      this.creditForm.get('guarantee').get('street').value
    );
    this.creditData.append(
      'loan[guarantee][external_number]',
      this.creditForm.get('guarantee').get('external_number').value
    );
    this.creditData.append(
      'loan[guarantee][internal_number]',
      this.creditForm.get('guarantee').get('internal_number').value
    );
    this.creditData.append(
      'loan[guarantee][colony]',
      this.creditForm.get('guarantee').get('colony').value
    );
    this.creditData.append(
      'loan[guarantee][user][first_name]',
      this.creditForm.get('guarantee').get('user').get('first_name').value
    );
    this.creditData.append(
      'loan[guarantee][user][last_name]',
      this.creditForm.get('guarantee').get('user').get('last_name').value
    );
    this.creditData.append(
      'loan[guarantee][user][phone]',
      this.creditForm.get('guarantee').get('user').get('phone').value
    );
    this.creditData.append(
      'loan[guarantee][user][gender]',
      this.creditForm.get('guarantee').get('user').get('gender').value
    );
    this.creditData.append(
      'loan[guarantee][user][birthday]',
      this.creditForm.get('guarantee').get('user').get('birthday').value
    );
    this._credits.createCredit(this.creditData).subscribe(response => {
      this.prepareCreditForm();
      this.renderer.setProperty(this.clientInput, 'value', '')
      this.renderer.setProperty(this.guaranteeInput, 'value', '')
      this.closeWindow.emit(true);
    }, (error) => {
      console.log(error);
    });
  }

  onCancel(){
    this.prepareCreditForm();
    console.log(this.fileInput)
    this.renderer.setProperty(this.clientInput.nativeElement, 'value', '')
    this.renderer.setProperty(this.guaranteeInput.nativeElement, 'value', '')
    this.renderer.setProperty(this.fileInput.nativeElement, 'textContent', '')
    this.closeWindow.emit(true);
  }

  searchClient(target: any){
    let q = target.value;
    let resultContainer = target.nextSibling;

    if(q == ''){
      this.renderer.removeClass(resultContainer, 'active');
    } else {
      this.renderer.addClass(resultContainer, 'active');
    }

    this._credits.getClients(q).subscribe(response => {
      this.clients = response['clients'];
    }, error => {
      console.log(error);
    });
  }

  selectClient(target: any){
    let input = target.parentElement.previousSibling;
    let client = this.clients.find(client => client.id == target.id);

    this.creditForm.get(['loan', 'client_id']).setValue(client.id)

    this.renderer.setProperty(input, 'id', client.id);
    this.renderer.setProperty(input, 'value', client.user.first_name + ' ' + client.user.last_name);
    this.renderer.removeClass(target.parentElement, 'active');

    this.clients = [];
  }

  changeRegisterType(event: any){
    const parent = event.target.parentElement;

    for(let section of parent.children){
      this.renderer.removeClass(section, 'active');
    }

    switch(event.target.id){
      case "search":
        this.selectedRegisterType = 1
        break;
      case "register":
        this.selectedRegisterType = 2
        break;
    }
    this.renderer.addClass(event.target, 'active');
  }

  searchGuarantee(target: any){
    let q = target.value;
    let resultContainer = target.nextSibling;

    if(q == ''){
      this.renderer.removeClass(resultContainer, 'active');
    } else {
      this.renderer.addClass(resultContainer, 'active');
    }

    this._credits.getGuarantees(q).subscribe(response => {
      this.guarantees = response['guarantees'];
    }, error => {
      console.log(error);
    });
  }

  selectGuarantee(target: any){
    let input = target.parentElement.previousSibling;
    let guarantee = this.guarantees.find(guarantee => guarantee.id == target.id);

    this.creditForm.get(['guarantee', 'id']).setValue(guarantee.id)

    this.renderer.setProperty(input, 'id', guarantee.id);
    this.renderer.setProperty(input, 'value', guarantee.user.first_name + ' ' + guarantee.user.last_name);
    this.renderer.removeClass(target.parentElement, 'active');

    this.guarantees = [];
  }

  uploadIdentification(files: FileList, path: any){
    this.identificationFile = files[0];

    if (this.identificationFile) {
      this.creditData.append('loan[guarantee][identification]', this.identificationFile, this.identificationFile.name);
      this.identificationLoaded = true;
      path.textContent = this.identificationFile.name;
    }
  }

  uploadAddressProof(files: FileList, path: any){
    this.addressProofFile = files[0];

    if (this.addressProofFile) {
      this.creditData.append('loan[guarantee][address_proof]', this.addressProofFile, this.addressProofFile.name);
      this.addressProofLoaded = true;
      path.textContent = this.addressProofFile.name;
    }
  }

  uploadWarningLetter(files: FileList, path: any){
    this.warningLetterFile = files[0];

    if (this.warningLetterFile) {
      this.creditData.append('loan[guarantee][warning_letter]', this.warningLetterFile, this.warningLetterFile.name);
      this.warningLetterLoaded = true;
      path.textContent = this.warningLetterFile.name;
    }
  }

  uploadFile(files: FileList, path: any){
    this.fileFile = files[0];

    if (this.fileFile) {
      this.creditData.append('loan[promissory_note][file]', this.fileFile, this.fileFile.name);
      this.fileLoaded = true;
      path.textContent = this.fileFile.name;
    }
  }

  clearFile(input: any, path: any){
    if(input.id == 'identification'){
      this.identificationLoaded = false;
      this.identificationFile = null;
      path.textContent = '';
      input.value = null;
    }

    if(input.id == 'address-proof'){
      this.addressProofLoaded = false;
      this.addressProofFile = null;
      path.textContent = '';
      input.value = null;
    }

    if(input.id == 'warning-letter'){
      this.warningLetterLoaded = false;
      this.warningLetterFile = null;
      path.textContent = '';
      input.value = null;
    }

    if(input.id == 'file'){
      this.fileLoaded = false;
      this.fileFile = null;
      path.textContent = '';
      input.value = null;
    }
  }

}
