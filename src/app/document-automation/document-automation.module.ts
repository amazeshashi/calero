import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentAutomationRoutingModule } from './document-automation-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentAutomationRoutingModule
  ],
  exports: [
    InvoiceComponent,
  ],
  declarations: [InvoiceComponent]
})
export class DocumentAutomationModule { }
