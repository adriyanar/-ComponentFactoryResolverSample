import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { formContainerDirective } from './formContainer.directive'

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    SignInComponent,
    SignUpComponent,
    formContainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SignInComponent, SignUpComponent, FormContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
