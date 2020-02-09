import {
  Component, OnInit,
  Input, Output, EventEmitter,
  ViewChild
} from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray,
  Validators
} from '@angular/forms';

import { CreditsService } from '../credits.service';

@Component({
  selector: 'app-credits-products',
  templateUrl: './credits-products.component.html',
  styleUrls: ['./credits-products.component.scss']
})
export class CreditsProductsComponent implements OnInit {

  @Output() closeModal;
  @Input() selectedCredit: any;
  productForm: FormGroup;
  productData: FormData;
  photoFile: File;
  photoLoaded: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private _credits: CreditsService
  ) {
    this.closeModal = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.prepareProductForm()
  }

  prepareProductForm(){
    this.productForm = this.formBuilder.group({
      name: [null],
      value: [5000.00],
      photo: [null],
    });
    this.productData = new FormData();
    this.photoLoaded = false;
  }

  uploadPhoto(files: FileList, path: any){
    this.photoFile = files[0];

    if (this.photoFile) {
      this.productData.append('product[photo]', this.photoFile, this.photoFile.name);
      this.photoLoaded = true;
      path.textContent = this.photoFile.name;
    }
  }

  clearFile(input: any, path: any){
    if(input.id == 'file'){
      this.photoLoaded = false;
      this.photoFile = null;
      path.textContent = '';
      input.value = null;
    }
  }

  addProduct(){
    console.log(this.selectedCredit)
    this.productData.append(
      'product[name]',
      this.productForm.get(['name']).value
    );
    this.productData.append(
      'product[value]',
      this.productForm.get(['value']).value
    );
    this.productData.append(
      'product[guarantee_product][promissory_note_id]',
      this.selectedCredit.promissory_note.id
    );

    this._credits.createProduct(this.productData).subscribe(response => {
      this.prepareProductForm();
      this.closeModal.emit(true);
    }, (error) => {
      console.log(error);
    });
  }
}
