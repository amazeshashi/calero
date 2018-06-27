import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  ngOnInit() {

    $('.invoivetable td a').click(function(event){
      event.preventDefault();
    });

  }

}
