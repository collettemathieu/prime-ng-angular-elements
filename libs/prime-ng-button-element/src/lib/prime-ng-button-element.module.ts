import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgButtonElementComponent } from './prime-ng-button-element.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [PrimeNgButtonElementComponent],
  exports: [PrimeNgButtonElementComponent]
})
export class PrimeNgButtonElementModule {}
