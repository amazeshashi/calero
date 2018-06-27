import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentAutomationRoutingModule } from './document-automation-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DocumentAutomationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InvoiceComponent,
  ],
  declarations: [InvoiceComponent]
})
export class DocumentAutomationModule { }
