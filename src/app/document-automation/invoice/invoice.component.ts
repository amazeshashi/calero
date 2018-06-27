import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  initItemRows() {
    return this._fb.group({
      item_id : [''],
      item_title: [''],
      unit: [0],
      price: [0],
      tax: [0],
    });
  }


  // public invoice = {
  //   unit: "",
  //   price: ""
  // }

  addFieldValue() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
  }

  deleteFieldValue(index) {
    console.log(index);
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }

  ngOnInit() {

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });

  }

}
