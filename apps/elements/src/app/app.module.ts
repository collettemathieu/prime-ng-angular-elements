import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PrimeNgButtonElementComponent, PrimeNgButtonElementModule } from 'prime-ng-button-element';
import { createCustomElement } from '@angular/elements';

@NgModule({
  //declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    PrimeNgButtonElementModule,
  ],
  providers: [],
  //bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

	async ngDoBootstrap() {
		const primeNgButtonElementComponent = createCustomElement(PrimeNgButtonElementComponent, {
			injector: this.injector,
		});
		customElements.define('button-prime-ng', primeNgButtonElementComponent);
	}
}
